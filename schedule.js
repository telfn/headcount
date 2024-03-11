// JavaScript Headcount
function calculateTotal() {
    const level1 = parseInt(document.getElementById('level1').value) || 0;
    const level2 = parseInt(document.getElementById('level2').value) || 0;
    const total = level1 + level2;
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
