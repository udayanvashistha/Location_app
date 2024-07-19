// location-result.js

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const latitude = params.get('lat');
    const longitude = params.get('lng');

    const locationInfo = document.getElementById('location-info');
    locationInfo.innerHTML = `
        <p><strong>Latitude:</strong> ${latitude}</p>
        <p><strong>Longitude:</strong> ${longitude}</p>
    `;

    // Optional: Fetch location name using a reverse geocoding API
    const apiKey = 'YOUR_OPENCAGE_API_KEY'; // Replace with your actual API key
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                const locationName = data.results[0].formatted;
                locationInfo.innerHTML += `<p><strong>Location:</strong> ${locationName}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching location data:', error);
        });
});
