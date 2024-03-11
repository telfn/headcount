// JavaScript Headcount
function calculateTotal() {
    const level2 = parseInt(document.getElementById('level2').value) || 0;
    const level3 = parseInt(document.getElementById('level3').value) || 0;
    const total = level2 + level3;
    document.getElementById('result').textContent = `Total: ${total}`;
}

// Example function for generating an Excel file
function generateExcel() {
    const data = [
        // Collect data here
    ];
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Schedule");
    XLSX.writeFile(wb, "schedule.xlsx");
}
// generating xslx file
document.addEventListener('DOMContentLoaded', function() {
    generateDailyInputs();
});

function generateExcel() {
    const weekCommencing = document.getElementById('weekCommencing').value;
    // Here, you would collect all the input values similarly

    // Data structure example
    const data = [
        ["Week Commencing", weekCommencing],
        // Add your actual data collection here
    ];

    // Generate Excel file
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Weekly Schedule");
    XLSX.writeFile(wb, `Schedule_${weekCommencing}.xlsx`);
}

function generateDailyInputs() {
    // This function should dynamically generate input fields for days, levels, and times
    // For demonstration, it's left as an exercise
}

