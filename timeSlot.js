// JavaScript timeSlot
document.addEventListener('DOMContentLoaded', function() {
    generateTimeSlots();
});

function generateTimeSlots() {
    const container = document.getElementById('timeSlots');
    for (let hour = 8; hour <= 19; hour++) {
        for (let minute = 0; minute < 60; minute += 30) { // Assuming 30-minute slots
            const timeSlot = document.createElement('div');
            timeSlot.classList.add('time-slot');

            const time = `${hour}:${minute === 0 ? '00' : minute}`;
            timeSlot.textContent = time;

            container.appendChild(timeSlot);
        }
    }
}
