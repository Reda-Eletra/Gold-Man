document.addEventListener("DOMContentLoaded", function () {
	const loginForm = document.getElementById("login-form");
	loginForm.addEventListener("submit", function (event) {
		event.preventDefault();
		const firstName = document.getElementById("first-name").value.trim();
		const lastName = document.getElementById("last-name").value.trim();
		const email = document.getElementById("email").value.trim();
		const username = document.getElementById("username").value.trim();
		const password = document.getElementById("password").value.trim();
		const confirmPassword = document.getElementById("confirm-password").value.trim();
		const namePattern = /^[A-Za-z]{2,}$/;
		const usernamePattern = /^[a-zA-Z0-9_]{4,}$/;
		const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
		if (!namePattern.test(firstName)) {
			alert("Please enter a valid first name.");
			return;
		}
		if (!namePattern.test(lastName)) {
			alert("Please enter a valid last name.");
			return;
		}
		if (!email) {
			alert("Please enter a valid email address.");
			return;
		}
		if (!usernamePattern.test(username)) {
			alert("Please enter a valid username (at least 4 characters and only alphanumeric characters and underscores).");
			return;
		}
		if (!passwordPattern.test(password)) {
			alert("Please enter a valid password (at least one number, one lowercase and one uppercase letter, and at least 8 characters).");
			return;
		}
		if (password !== confirmPassword) {
			alert("Passwords do not match.");
			return;
		}
		alert("Form submitted successfully!");
		loginForm.reset();
	});
});
