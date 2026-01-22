import CancelIcon from "@mui/icons-material/Cancel";
import PreviewTwoToneIcon from "@mui/icons-material/PreviewTwoTone";

export default function ViewChecklistModal({
  formData,
  setShowModal,
}) {
  const dayOrder = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const checklistItems = formData.checklistItems || [];

  // backend day (single day only)
  const backendDay = checklistItems[0]?.day || "";

  const allDays = dayOrder;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-6xl rounded shadow overflow-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg flex items-center gap-2 text-indigo-700">
            <PreviewTwoToneIcon /> View Checklist
          </h2>
          <button
            className="text-red-600 text-xl hover:text-red-700 hover:font-bold"
            onClick={() => setShowModal(false)}
          >
            <CancelIcon />
          </button>
        </div>

        <div className="p-4 space-y-4 text-gray-700">
          {/* TABLE */}
          <div className="flex gap-2">
            <label className="font-semibold">TABLE NO:</label>
            <span className="font-semibold">{formData.table || "-"}</span>
          </div>

          {/* SHIFT */}
          <div className="flex gap-10 text-gray-700">
            <label className="font-semibold">SHIFT:</label>
            <span className="font-semibold">{formData.shift || "-"}</span>
          </div>

          {/* AREA */}
          <div className="flex gap-10 text-gray-700">
            <label className="font-semibold">AREA:</label>
            <span className="font-semibold">{formData.area || "-"}</span>
          </div>

          {/* CHECKLIST TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full table-auto border border-gray-300">
              <thead className="bg-gray-100">
                {/* Workweek */}
                <tr>
                  <th
                    colSpan={4 + allDays.length}
                    className="border px-1 py-1 text-center"
                  >
                    {formData.workweek}
                  </th>
                </tr>

                {/* Days */}
                <tr>
                  <td colSpan={4} />
                  {allDays.map((d) => (
                    <td key={d} className="text-center border px-1 py-1">
                      {d}
                    </td>
                  ))}
                </tr>

                {/* Performed By */}
                <tr>
                  <td colSpan={3} />
                  <td className="font-semibold">Performed By:</td>
                  {allDays.map((d) => (
                    <td key={d} className="border px-1 py-1 text-center">
                      {d === backendDay
                        ? checklistItems[0]?.performedBy || ""
                        : ""}
                    </td>
                  ))}
                </tr>

                {/* Date Performed */}
                <tr>
                  <td colSpan={3} />
                  <td className="font-semibold">Date Performed:</td>
                  {allDays.map((d) => (
                    <td key={d} className="border px-1 py-1 text-center">
                      {d === backendDay
                        ? checklistItems[0]?.datePerformed || ""
                        : ""}
                    </td>
                  ))}
                </tr>

                {/* Column headers */}
                <tr>
                  <th className="border px-1 py-1">Checklist Item</th>
                  <th className="border px-1 py-1">Requirement</th>
                  <th className="border px-1 py-1">Activity</th>
                  <th className="border px-1 py-1">Frequency</th>
                  {allDays.map((d) => (
                    <th key={d} className="border px-1 py-1 text-center">
                      Status
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {checklistItems.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-1 py-1">
                      {item.checklist_item}
                    </td>
                    <td className="border px-1 py-1 text-center">
                      {item.requirement}
                    </td>
                    <td className="border px-1 py-1 text-center">
                      {item.activity}
                    </td>
                    <td className="border px-1 py-1 text-center">
                      {item.frequency}
                    </td>

                    {allDays.map((d) => (
  <td
    key={`${index}-${d}`}
    className="border px-1 py-1 text-center"
  >
    {d === backendDay
      ? item.checklistStatus === 1
        ? "✔"
        : "N/A"
      : ""}
  </td>
))}

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex justify-end mt-4">
            <button
              className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 text-white"
              onClick={() => setShowModal(false)}
            >
              <CancelIcon /> Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
