// JavaScript Save to Excel
document.addEventListener('DOMContentLoaded', function() {
    generateTimeSlots();
});

function generateTimeSlots() {
    const container = document.getElementById('timeSlots');
    for (let hour = 8; hour <= 19; hour++) {
        for (let minute = 0; minute < 60; minute += 30) { // Assuming 30-minute slots
            const time = `${hour}:${minute === 0 ? '00' : minute}`;
            const label = document.createElement('label');
            label.textContent = time;
            container.appendChild(label);

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = time;
            checkbox.name = time;
            container.appendChild(checkbox);
            container.appendChild(document.createElement('br'));
        }
    }
}

function calculateTotal() {
    const level2 = parseInt(document.getElementById('level2').value) || 0;
    const level3 = parseInt(document.getElementById('level3').value) || 0;
    const total = level2 + level3;

    document.getElementById('totalHeadcount').textContent = `Total Headcount: ${total}`;
    // Optional: Save to Excel here
}

// Include function to save to Excel using SheetJS if required
