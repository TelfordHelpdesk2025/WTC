import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Box, Typography, Card } from "@mui/material";
import ConfirmationNumberTwoToneIcon from '@mui/icons-material/ConfirmationNumberTwoTone';
import EdgesensorHighTwoToneIcon from '@mui/icons-material/EdgesensorHighTwoTone';
import AppBlockingTwoToneIcon from '@mui/icons-material/AppBlockingTwoTone';
import RecentActorsTwoToneIcon from '@mui/icons-material/RecentActorsTwoTone';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

export default function Dashboard({
  numberTable,
  numberTableUse,
  numberTableNotUse,
  activePersonnel
}) {

  // --- Manual colors ---
  const barColors = ['#2b00c5c4', '#80deea', '#bcaaa4', '#e6ee9c']; // BarChart colors
  const pieColors = ['#2b00c5c4', '#d8d8d8']; // PieChart slices: Used = orange, Not Used = blue

  const metrics = [
    { label: 'Total Tables', value: numberTable, icon: <ConfirmationNumberTwoToneIcon sx={{ fontSize: 30, color: '#2e7d32' }} /> },
    { label: 'Table Use', value: numberTableUse, icon: <EdgesensorHighTwoToneIcon sx={{ fontSize: 30, color: '#00838f' }} /> },
    { label: 'Table Not Use', value: numberTableNotUse, icon: <AppBlockingTwoToneIcon sx={{ fontSize: 30, color: '#4e342e' }} /> },
    { label: 'Active Personnel', value: activePersonnel, icon: <RecentActorsTwoToneIcon sx={{ fontSize: 30, color: '#9e9d24' }} /> },
  ];

  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />

      <Box sx={{ p: 3 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontFamily: "'Patrick Hand', cursive", // <-- doodle / hand-drawn font
            fontWeight: 400,
            color: "#a3972b"
          }}
        >
          <DashboardTwoToneIcon sx={{ fontSize: 40, color: '#a3972b' }} /> Dashboard Summary
        </Typography>

        {/* SUMMARY CARDS */}
        <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
          {[
            { title: "Total Tables", value: numberTable, bgColor: "#a5d6a7", textColor: "#2e7d32", icon: metrics[0].icon },
            { title: "Table Use", value: numberTableUse, bgColor: "#80deea", textColor: "#00838f", icon: metrics[1].icon },
            { title: "Table Not Use", value: numberTableNotUse, bgColor: "#bcaaa4", textColor: "#4e342e", icon: metrics[2].icon },
            { title: "Active Personnel", value: activePersonnel, bgColor: "#e6ee9c", textColor: "#9e9d24", icon: metrics[3].icon }
          ].map(card => (
            <Card key={card.title} sx={{ p: 2, flex: 1, bgcolor: card.bgColor, color: "black" }}>
              {card.icon}
              <Typography>{card.title}</Typography>
              <Typography
                variant="h4"
                sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", color: card.textColor }}
              >
                {card.value}
              </Typography>
            </Card>
          ))}
        </Box>

        {/* GRAPHS: Bar + Pie side by side */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {/* BAR CHART */}
          <Card sx={{ p: 3, flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Daily Overview
            </Typography>
            <BarChart
              height={300}
              xAxis={[{ scaleType: 'band', data: metrics.map(m => m.label) }]}
              series={[{ data: metrics.map(m => m.value) }]}
              colors={barColors} // <-- manual bar colors
            />
          </Card>

          {/* PIE CHART */}
          <Card sx={{ p: 3, flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Table Usage Distribution
            </Typography>
            <PieChart
              height={300}
              series={[{
                data: metrics.slice(1, 3).map((m, i) => ({
                  id: i,
                  value: m.value,
                  label: m.label
                })),
              }]}
              colors={pieColors}
            />
          </Card>
        </Box>
      </Box>
    </AuthenticatedLayout>
  );
}
