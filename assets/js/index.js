// Function to get the time for a specific location
function getTimeForLocation(location) {
    // Define an object that maps location names to their respective time zones
    const timeZones = {
        "New York": "America/New_York",
        "London": "Europe/London",
        "Tokyo": "Asia/Tokyo",
        "Sydney": "Australia/Sydney",
        "Paris": "Europe/Paris",
        "Berlin": "Europe/Berlin",
        "Moscow": "Europe/Moscow",
        "Los Angeles": "America/Los_Angeles",
        "Dubai": "Asia/Dubai"
    };

    // Return the current time for the selected location formatted in 'en-US' locale
    // 'timeZone' is set dynamically using the timeZone for the selected location
    return new Date().toLocaleString('en-US', { 
        timeZone: timeZones[location], // Use the time zone based on the selected location
        timeStyle: 'medium', // Set the time style to 'medium' for clarity
        dateStyle: 'full'    // Set the date style to 'full' to show complete date information
    });
}

// Function to update the displayed time for both the selected location and the user's local time
function updateTime() {
    // Get the selected location from the dropdown menu
    const selectedLocation = document.getElementById('locationSelect').value;

    // Update the time for the selected location by calling getTimeForLocation() and setting the result as the text content
    document.getElementById('selectedTime').querySelector('span').textContent = getTimeForLocation(selectedLocation);

    // Update the local time by creating a new Date object and formatting it in 'en-US' locale
    document.getElementById('localTime').querySelector('span').textContent = new Date().toLocaleString('en-US', { 
        timeStyle: 'medium', // Use medium style for local time
        dateStyle: 'full'    // Use full style for the local date
    });
}

// Add an event listener to the location select dropdown to trigger updateTime when the selection changes
document.getElementById('locationSelect').addEventListener('change', updateTime);

// Initial load - call updateTime() to display the initial time when the page loads
updateTime();
