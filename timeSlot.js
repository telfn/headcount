// JavaScript timeSlot
document.addEventListener('DOMContentLoaded', function() {
    generateTimeSlots();
});

function generateTimeSlots() {
    const container = document.getElementById('timeSlots');
    for (let hour = 8; hour <= 19; hour++) {
        for (let minute = 0; minute < 60; minute += 30) { // Assuming 30-minute slots
            const time = `${hour}:${minute === 0 ? '00' : minute}`;
            const label = document.createElement('label');
            label.classList.add('time-slot');
            label.textContent = time;
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = time;
            checkbox.name = time;
            
            label.appendChild(checkbox);
            container.appendChild(label);

            checkbox.addEventListener('change', saveToExcel);
        }
    }
}

function collectData() {
    const slots = document.querySelectorAll('.time-slot input');
    const data = [["Time Slot", "Selected"]];
    slots.forEach(slot => {
        const selected = slot.checked ? "Yes" : "No";
        data.push([slot.name, selected]);
    });
    return data;
}

function saveToExcel() {
    const data = collectData();
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Time Slots");
    XLSX.writeFile(wb, "schedule.xlsx");
}
