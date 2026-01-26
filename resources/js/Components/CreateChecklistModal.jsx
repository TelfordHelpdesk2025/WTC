import CancelIcon from "@mui/icons-material/Cancel";
import SaveTwoToneIcon from "@mui/icons-material/SaveTwoTone";
import NewLabelTwoToneIcon from "@mui/icons-material/NewLabelTwoTone";
import { useEffect, useState } from "react";

export default function CreateChecklistModal({
  formData,
  setFormData,
  tables,
  areas,
  setShowModal,
  saveChecklist,
  categories = [],
}) {
  const [selectedCategory, setSelectedCategory] = useState("");

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
  const currentDay = dayNames[todayIndex]; // e.g., "Thursday"
  const DAYS = [currentDay]; // only current day for checklist

  // Initialize checklistStatus for all items
  useEffect(() => {
    const updatedStatus = {};
    formData.checklistItems.forEach((item) => {
      updatedStatus[item.id] = {};
      DAYS.forEach((day) => {
        if (item.activity === "N/A" && item.frequency === "N/A") {
          updatedStatus[item.id][day] = "0"; // N/A
        } else {
          updatedStatus[item.id][day] = "1"; // ✔ auto-check
        }
      });
    });
    setFormData((prev) => ({
      ...prev,
      checklistStatus: updatedStatus,
    }));
  }, [formData.checklistItems]);

  // Filter checklist items based on selected category
  const filteredItems = selectedCategory
    ? formData.checklistItems.filter((item) => item.category === selectedCategory)
    : [];

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
        <div className="p-4 space-y-4 text-gray-700">
          {/* Select Category */}
          <div className="flex gap-4 items-center">
            
          </div>

          {/* Table & Area */}
          <div className="flex gap-10 items-center">
            
            <label className="font-semibold">TABLE NO:</label>
            <select
              className="border p-2 w-64 rounded-md"
              value={formData.table}
              onChange={(e) => setFormData({ ...formData, table: e.target.value })}
            >
              <option value="">Select Table</option>
              {tables.map((t) => (
                <option key={t.table_name} value={t.table_name}>
                  {t.table_name}
                </option>
              ))}
            </select>

            <label className="font-semibold">AREA:</label>
            <select
              className="border p-2 w-64 rounded-md"
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
            >
              <option value="">Select Area</option>
              {areas.map((a) => (
                <option key={a.location_name} value={a.location_name}>
                  {a.location_name}
                </option>
              ))}
            </select>

            <label className="font-semibold">Category:</label>
            <select
              className="border p-2 w-64 rounded-md"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">-- Select Category --</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Checklist Table */}
          {selectedCategory && (
            <div className="overflow-x-auto mt-4">
              <table className="w-full border border-gray-300 table-auto">
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
                    <th>Checklist Item</th>
                    <th>Requirement</th>
                    <th>Activity</th>
                    <th>Frequency</th>
                    <th>Day / Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map((item) => (
                    <tr key={item.id}>
                      <td className="border px-1 py-1">{item.checklist_item}</td>
                      <td className="border px-1 py-1 text-center">{item.requirement}</td>
                      <td className="border px-1 py-1 text-center">{item.activity}</td>
                      <td className="border px-1 py-1 text-center">{item.frequency}</td>
                      <td className="border px-1 py-1 text-center">
                        <select
                          className="border-none p-1 rounded w-28 text-center"
                          value={formData.checklistStatus[item.id]?.[DAYS[0]] || ""}
                          disabled
                        >
                          <option value="1">✔</option>
                          <option value="0">N/A</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                  {filteredItems.length === 0 && (
                    <tr>
                      <td colSpan={5} className="text-center py-2 text-gray-500">
                        No checklist items for selected category
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 text-white flex items-center gap-1"
              onClick={() => setShowModal(false)}
            >
              <CancelIcon /> Cancel
            </button>
            <button
  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-1"
  onClick={() => saveChecklist(selectedCategory)}
>
  <SaveTwoToneIcon /> Save
</button>

          </div>
        </div>
      </div>
    </div>
  );
}
