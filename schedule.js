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
