document.addEventListener("DOMContentLoaded", function () {
	const bookingForm = document.getElementById("booking-form");
	const bookingsTableBody = document.querySelector("#bookings-table tbody");
	bookingForm.addEventListener("submit", function (event) {
		event.preventDefault();
		const formData = new FormData(bookingForm);
		const date = formData.get("date");
		const time = formData.get("time");
		const barber = formData.get("barber");
		const service = formData.get("service");
		const clientName = formData.get("yourname");
		const newRow = document.createElement("tr");
		newRow.innerHTML = `
					<td>${date} ${time}</td>
					<td>${barber}</td>
					<td>${service}</td>
					<td>${clientName}</td>
			`;
		bookingsTableBody.appendChild(newRow);
		bookingForm.reset();
	});
});
