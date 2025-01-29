const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let currentDate = new Date();

function renderCalendar(date) {
    const monthYear = document.getElementById("month-year");
    const calendarDates = document.getElementById("calendar-dates");

    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Update header
    monthYear.textContent = `${monthNames[month]} ${year}`;

    // Clear previous dates
    calendarDates.innerHTML = "";

    // Add empty slots for days before the 1st of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement("div");
        calendarDates.appendChild(emptyDiv);
    }

    // Add dates of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dateDiv = document.createElement("div");
        dateDiv.textContent = day;

        // Highlight current date
        if (
            day === new Date().getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear()
        ) {
            dateDiv.classList.add("current-date");
        }

        calendarDates.appendChild(dateDiv);
    }
}

function changeMonth(direction) {
    currentDate.setMonth(currentDate.getMonth() + direction);
    renderCalendar(currentDate);
}

// Initial render
renderCalendar(currentDate);
