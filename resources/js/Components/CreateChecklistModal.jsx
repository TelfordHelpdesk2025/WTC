import CancelIcon from "@mui/icons-material/Cancel";
import SaveTwoToneIcon from "@mui/icons-material/SaveTwoTone";
import NewLabelTwoToneIcon from "@mui/icons-material/NewLabelTwoTone";

export default function CreateChecklistModal({
  formData,
  setFormData,
  tables,
  areas,
  setShowModal,
  saveChecklist,
}) {
  // ✅ Full day names
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const todayIndex = new Date().getDay(); // 0–6
  const currentDay = dayNames[todayIndex]; // "Thursday" etc.
  const DAYS = [currentDay]; // Only current day for checklist


  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-7xl rounded shadow overflow-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg flex items-center gap-2 text-emerald-700">
            <NewLabelTwoToneIcon /> New Working Table Checklist
          </h2>
          <button
            className="text-red-600 text-xl hover:text-red-700 hover:font-bold"
            onClick={() => setShowModal(false)}
          >
            <CancelIcon />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 space-y-4">
          {/* Inputs */}
          <div className="flex gap-2 text-gray-700">
            <label className="font-semibold mt-2">TABLE NO:</label>
            <select
              className="border p-2 w-64 rounded"
              value={formData.table}
              onChange={(e) =>
                setFormData({ ...formData, table: e.target.value })
              }
            >
              <option value="">Select Table</option>
              {tables.map((t) => (
                <option key={t.table_name} value={t.table_name}>
                  {t.table_name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-10 text-gray-700">
            <label className="font-semibold">SHIFT:</label>
            <input
              type="text"
              className="border-none p-2 py-0 w-32 rounded font-semibold"
              value={formData.shift}
              readOnly
            />
          </div>

          <div className="flex gap-10 text-gray-700">
            <label className="font-semibold mt-2">AREA:</label>
            <select
              className="border p-2 w-64 rounded"
              value={formData.area}
              onChange={(e) =>
                setFormData({ ...formData, area: e.target.value })
              }
            >
              <option value="">Select Area</option>
              {areas.map((a) => (
                <option key={a.location_name} value={a.location_name}>
                  {a.location_name}
                </option>
              ))}
            </select>
          </div>

          {/* Checklist Table */}
          <div className="overflow-x-auto text-gray-700">
            <table className="w-full table-auto border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th colSpan={5} className="border px-1 py-1">
                    <input
                      type="text"
                      className="border-none p-1 w-full rounded text-center bg-gray-100"
                      value={formData.workweek}
                      readOnly
                    />
                  </th>
                </tr>
                <tr>
                  <td colSpan={4} />
                  {DAYS.map((d) => (
                    <td key={d} className="border-none text-center rounded bg-gray-100 font-semibold text-blue-700">
                      {d}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td colSpan={3} />
                  <td>Performed By</td>
                  {DAYS.map((d) => (
                    <td className="border px-1 py-1 text-center" key={d}>
                      <input
                        type="text"
                        className="border-none p-1 w-32 text-center rounded bg-gray-100 font-semibold text-blue-700"
                        value={formData.performedBy}
                        readOnly
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td colSpan={3} />
                  <td>Date Performed</td>
                  {DAYS.map((d) => (
                    <td className="border px-1 py-1 text-center" key={d}>
                      <input
                        type="text"
                        className="border-none p-1 w-32 text-center rounded bg-gray-100 font-semibold text-blue-700"
                        value={formData.datePerformed}
                        readOnly
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="border px-1 py-1">Checklist Item</th>
                  <th className="border px-1 py-1">Requirement</th>
                  <th className="border px-1 py-1">Activity</th>
                  <th className="border px-1 py-1">Frequency</th>
                  <th className="border px-1 py-1"></th>
                </tr>
              </thead>

              <tbody>
                {formData.checklistItems.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-1 py-1">{item.checklist_item}</td>
                    <td className="border px-1 py-1 text-center">
                      {item.requirement}
                    </td>
                    <td className="border px-1 py-1 text-center">{item.activity}</td>
                    <td className="border px-1 py-1 text-center">{item.frequency}</td>
                    {DAYS.map((d) => (
                      <td key={d} className="border px-1 py-1 text-center">

                        <select
                          className="border-none p-1 rounded w-28 text-center"
                          value={formData.checklistStatus[item.id]?.[d] || ""}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              checklistStatus: {
                                ...formData.checklistStatus,
                                [item.id]: {
                                  ...formData.checklistStatus[item.id],
                                  [d]: e.target.value,
                                },
                              },
                            })
                          }
                        >
                          <option value="">Select</option>
                          <option value="1">✔</option>
                          <option value="0">N/A</option>
                        </select>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 text-white"
              onClick={() => setShowModal(false)}
            >
              <CancelIcon /> Cancel
            </button>
            <button
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              onClick={saveChecklist}
            >
              <SaveTwoToneIcon /> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
