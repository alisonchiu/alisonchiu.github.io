// BEYONDTOURISM SURVEY AGE
var ctx = document.getElementById('bt_age').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["18 - 24", "25 - 34", "above 45"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                'rgba(51, 55, 69, 1)',
                'rgba(230, 52, 98, 1)',
                'rgba(254, 95, 85, 1)',
            ],
            data: [32, 4, 1],
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'How old are you?',
            fontColor: 'black'
        }
    }
});

// BEYONDTOURISM SURVEY TRAVEL
var ctx = document.getElementById('bt_travel').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["multiple times per year", "once per year", "once a month or more"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                'rgba(51, 55, 69, 1)',
                'rgba(230, 52, 98, 1)',
                'rgba(254, 95, 85, 1)',
            ],
            data: [19, 13, 4],
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'How often do you travel?',
            fontColor: 'black'
        }
    }
});

// BEYONDTOURISM SURVEY SITE
var ctx = document.getElementById('bt_site').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["Kayak", "REI Adventures", "Expedia", "Lonely Planet", "TripAdvisor", "StudentUniverse", "Other"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                'rgba(51, 55, 69, 1)',
                'rgba(230, 52, 98, 1)',
                'rgba(254, 95, 85, 1)',
            ],
            data: [10, 1, 23, 6, 24, 4, 10],
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'What sites do you use?',
            fontColor: 'black'
        }
    }
});

// BEYONDTOURISM SURVEY DEVICE
var ctx = document.getElementById('bt_device').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["Phone", "Desktop", "Other"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                'rgba(51, 55, 69, 1)',
                'rgba(230, 52, 98, 1)',
                'rgba(254, 95, 85, 1)',
            ],
            data: [26, 34, 5],
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'What devices do you use to plan?',
            fontColor: 'black'
        }
    }
});