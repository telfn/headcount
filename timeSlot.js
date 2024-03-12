// JavaScript Document
document.addEventListener('DOMContentLoaded', function() {
    generateTimeSlots();
});

function generateTimeSlots() {
    const startHour = 8.5; // 8:30 AM
    const endHour = 19; // 7:00 PM
    const timeSlotsContainer = document.getElementById('timeSlots');
    timeSlotsContainer.innerHTML = ''; // Clear previous slots

    for (let hour = startHour; hour < endHour; hour += 0.5) {
        const timeSlotDiv = document.createElement('div');
        timeSlotDiv.classList.add('timeSlot');
        const displayHour = Math.floor(hour);
        const displayMinute = (hour % 1) * 60 === 0 ? '00' : '30';
        timeSlotDiv.textContent = `${displayHour}:${displayMinute}`;
        timeSlotsContainer.appendChild(timeSlotDiv);
    }
}

function calculate() {
    const level2 = parseInt(document.getElementById('level2').value) || 0;
    const level3 = parseInt(document.getElementById('level3').value) || 0;
    const total = level2 + level3;
    alert(`Total: ${total}`);
}

function saveToSheet() {
    // This function requires server-side or a library like SheetJS (xlsx.js) for client-side handling
    alert('Saving to sheet function is not implemented in this snippet.');
}

function downloadSheet() {
    // Similar to saveToSheet, requires server-side handling or a library
    alert('Download sheet function is not implemented in this snippet.');
}
timeSlottimeSlot