// script.js

// Define an array of events and activities with their name, description, date, time, price, and coordinates
var events = [
    {
        name: "Family Fun Day",
        description: "Join us for a day of fun and games for the whole family. There will be face painting, balloon animals, magic shows, and more.",
        date: "Saturday, March 9, 2024",
        time: "10:00 - 16:00",
        price: "Free",
        coordinates: [49.316, 6.995]
    },
    {
        name: "Movie Night",
        description: "Enjoy a movie night under the stars with your loved ones. We will be showing the classic film E.T. the Extra-Terrestrial. Don't forget to bring your blankets and snacks.",
        date: "Friday, March 15, 2024",
        time: "19:00 - 21:00",
        price: "5€ per person",
        coordinates: [49.321, 7.001]
    },
    {
        name: "Art Workshop",
        description: "Learn how to create your own masterpiece with the guidance of a professional artist. All materials will be provided. No experience required.",
        date: "Sunday, March 17, 2024",
        time: "14:00 - 16:00",
        price: "10€ per person",
        coordinates: [49.313, 6.987]
    }
];

var mapContainer2 = document.getElementById("map-container");
let map;
let markers = [];

function initMap() {
    map = L.map(mapContainer2).setView([49.316, 6.995], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

     // Loop through the events array and create a marker for each event
    for (var i = 0; i < events.length; i++) {
        var event = events[i];

        // Create a marker with the event coordinates
        var marker = L.marker(event.coordinates).addTo(map);

        // Create a popup with the event details and a link to book tickets
        var popup = L.popup().setContent(
            "<h3>" + event.name + "</h3>" +
            "<p>" + event.description + "</p>" +
            "<p>Date: " + event.date + "</p>" +
            "<p>Time: " + event.time + "</p>" +
            "<p>Price: " + event.price + "</p>" +
            "<a href='book.html?event=" + i + "'>Book Tickets</a>"
        );

        // Bind the popup to the marker
        marker.bindPopup(popup);

        // Add an event listener to the marker to handle clicks
        marker.on('over', function(e) {
            // Do something when the marker is clicked
            // For example, you could open the booking page in a new tab
            window.open('book.html?event=' + this.options.eventIndex, '_blank');
        });

        // Store the event index in the marker options so that it can be accessed in the event listener
        marker.options.eventIndex = i;
    }
}


initMap();
fetchActivities().then(data => displayActivities(data));
window.onload = initMap;