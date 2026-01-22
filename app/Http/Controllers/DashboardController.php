<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $today = now()->toDateString();

        // Total tables
        $numberTable = DB::connection('mysql')->table('table_tbl')->count();

        // Active tables (used today)
        $numberTableUse = DB::connection('mysql')
            ->table('table_tbl as t')
            ->join('table_checklist as c', 'c.table_name', '=', 't.table_name')
            ->whereDate('c.date_created', $today)
            ->distinct()
            ->count('t.table_name');

        // Inactive tables (not used today)
        $numberTableNotUse = DB::connection('mysql')
            ->table('table_tbl as t')
            ->whereNotExists(function ($q) use ($today) {
                $q->select(DB::raw(1))
                    ->from('table_checklist as c')
                    ->whereColumn('c.table_name', 't.table_name')
                    ->whereDate('c.date_created', $today);
            })
            ->count();

        // Active personnel (cross-connection)
        $activeEmployIds = DB::connection('mysql')
            ->table('table_checklist as c')
            ->join(DB::raw("
                JSON_TABLE(
                    c.checklist_item,
                    '$[*]' COLUMNS (
                        performed_by VARCHAR(50) PATH '$.performed_by'
                    )
                ) as items
            "), DB::raw('1'), DB::raw('1'))
            ->whereDate('c.date_created', $today)
            ->select('items.performed_by')
            ->distinct()
            ->pluck('performed_by');

        $activePersonnelCount = DB::connection('masterlist')
            ->table('employee_masterlist')
            ->whereIn('EMPLOYID', $activeEmployIds)
            ->count();

        return Inertia::render('Dashboard', [
            'numberTable' => $numberTable,
            'numberTableUse' => $numberTableUse,
            'numberTableNotUse' => $numberTableNotUse,
            'activePersonnel' => $activePersonnelCount,
        ]);
    }
}
