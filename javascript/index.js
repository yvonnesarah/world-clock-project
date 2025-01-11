function getTimeForLocation(location) {
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
    return new Date().toLocaleString('en-US', { timeZone: timeZones[location], timeStyle: 'medium', dateStyle: 'full' });
}

function updateTime() {
    const selectedLocation = document.getElementById('locationSelect').value;
    document.getElementById('selectedTime').querySelector('span').textContent = getTimeForLocation(selectedLocation);
    document.getElementById('localTime').querySelector('span').textContent = new Date().toLocaleString('en-US', { timeStyle: 'medium', dateStyle: 'full' });
}

document.getElementById('locationSelect').addEventListener('change', updateTime);

// Initial load
updateTime();