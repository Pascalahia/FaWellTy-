// script.js
/*
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
    },
    {
        Name: "Yoga Retreat",
        Description: "Relax and rejuvenate your mind, body, and soul with a weekend yoga retreat. Join experienced instructors for a series of yoga sessions surrounded by nature.",
        Date: "Saturday-Sunday, April 20-21, 2024",
        Time: "09:00 - 17:00",
        Price: "$150 per person",
        Coordinates: [49.318, 6.997]

    },
    {
        Name: "Cooking Class",
        Description: "Explore the culinary world and enhance your cooking skills in a hands-on cooking class. Discover new recipes and techniques under the guidance of professional chefs.",
        Date: "Saturday, May 4, 2024",
        Time: "11:00 - 14:00",
        Price: "$30 per person",
        Coordinates: [49.320, 6.999]

    },
    {
        Name: "Photography Workshop",
        Description: "Capture the beauty of the world around you in a photography workshop led by experienced photographers. Learn about composition, lighting, and editing techniques.",
        Date: "Saturday, June 15, 2024",
        Time: "10:00 - 15:00",
        Price: "$50 per person",
        Coordinates: [49.322, 6.972]

    },
    {
        Name: "Nature Hike",
        Description: "Embark on an adventurous nature hike through scenic trails and lush forests. Discover hidden gems and breathtaking views along the way.",
        Date: "Sunday, July 7, 2024",
        Time: "08:00 - 12:00",
        Price: "Free",
        Coordinates: [49.522, 6.872]

    },
    {
        Name: "Meditation Retreat",
        Description: "Find inner peace and serenity in a meditation retreat led by experienced meditation instructors. Connect with your inner self and experience deep relaxation.",
        Date: "Saturday-Sunday, August 10-11, 2024",
        Time: "08:00 - 17:00",
        Price: "$100 per person",
        Coordinates: [49.342, 6.932]
    },
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
window.onload = initMap;*/



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
    },
    {
        name: "Yoga Retreat",
        description: "Relax and rejuvenate your mind, body, and soul with a weekend yoga retreat. Join experienced instructors for a series of yoga sessions surrounded by nature.",
        date: "Saturday-Sunday, April 20-21, 2024",
        time: "09:00 - 17:00",
        price: "$150 per person",
        coordinates: [49.318, 6.997]
    },
    {
        name: "Cooking Class",
        description: "Explore the culinary world and enhance your cooking skills in a hands-on cooking class. Discover new recipes and techniques under the guidance of professional chefs.",
        date: "Saturday, May 4, 2024",
        time: "11:00 - 14:00",
        price: "$30 per person",
        coordinates: [49.320, 6.999]
    },
    {
        name: "Photography Workshop",
        description: "Capture the beauty of the world around you in a photography workshop led by experienced photographers. Learn about composition, lighting, and editing techniques.",
        date: "Saturday, June 15, 2024",
        time: "10:00 - 15:00",
        price: "$50 per person",
        coordinates: [49.322, 6.972]
    },
    {
        name: "Nature Hike",
        description: "Embark on an adventurous nature hike through scenic trails and lush forests. Discover hidden gems and breathtaking views along the way.",
        date: "Sunday, July 7, 2024",
        time: "08:00 - 12:00",
        price: "Free",
        coordinates: [49.522, 6.872]
    },
    {
        name: "Meditation Retreat",
        description: "Find inner peace and serenity in a meditation retreat led by experienced meditation instructors. Connect with your inner self and experience deep relaxation.",
        date: "Saturday-Sunday, August 10-11, 2024",
        time: "08:00 - 17:00",
        price: "$100 per person",
        coordinates: [49.342, 6.932]
    },
    {
        name: "Fitness Bootcamp",
        description: "Join our intense fitness bootcamp and challenge yourself to reach new heights of strength and endurance. Suitable for all fitness levels.",
        date: "Saturday, September 14, 2024",
        time: "07:00 - 10:00",
        price: "$20 per person",
        coordinates: [49.333, 6.999]
    },
    {
        name: "Salsa Dance Workshop",
        description: "Spice up your dance moves with our salsa dance workshop. Learn the basics of salsa dancing and impress your friends on the dance floor.",
        date: "Friday, October 25, 2024",
        time: "18:00 - 20:00",
        price: "$15 per person",
        coordinates: [49.339, 6.995]
    },
    {
        name: "Live Music Concert",
        description: "Experience the magic of live music with our outdoor concert featuring local artists. Enjoy a night of great music, food, and drinks under the stars.",
        date: "Saturday, November 9, 2024",
        time: "20:00 - 23:00",
        price: "$25 per person",
        coordinates: [49.330, 6.988]
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
        marker.on('click', function(e) {
            // Do something when the marker is clicked
            // For example, you could open the booking page in a new tab
           // window.open('book.html?event=' + this.options.eventIndex, '_blank');
        });

        // Store the event index in the marker options so that it can be accessed in the event listener
        marker.options.eventIndex = i;
    }
}

initMap();
