const apiKey = 'd7f6c9ad10f54199892fc55aa257a030'; // Your OpenCage API key
const baseUrl = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}`;

// Function to fetch location details from latitude and longitude
function fetchLocation(latitude, longitude) {
    const url = `${baseUrl}&q=${latitude},${longitude}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                const location = data.results[0].formatted;
                document.getElementById('location-display').innerText = location;
            } else {
                console.error('No results found');
                document.getElementById('location-display').innerText = 'Location not found';
            }
        })
        .catch(error => {
            console.error('Error fetching location:', error);
            document.getElementById('location-display').innerText = 'Error fetching location';
        });
}

// Function to handle form submission
document.getElementById('location-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;

    fetchLocation(latitude, longitude);
});
