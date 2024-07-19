// location.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('location-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            const latitude = document.getElementById('latitude').value;
            const longitude = document.getElementById('longitude').value;

            // Redirect to location-result.html with latitude and longitude as query parameters
            window.location.href = `../location-result/location-result.html?lat=${latitude}&lng=${longitude}`;
        });
    } else {
        console.error('Form with ID "location-form" not found.');
    }
});
