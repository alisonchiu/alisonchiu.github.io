// SCRAMBLED SURVEY AGE
var ctx = document.getElementById('scr_age').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["Under 17", "18 - 24", "25 - 34", "35 - 44", "Above 45"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                'rgba(51, 55, 69, 1)',
                'rgba(230, 52, 98, 1)',
                'rgba(254, 95, 85, 1)',
                'rgba(199, 239, 207, 1)',
                'rgba(238, 245, 219, 1)',
            ],
            data: [6, 144, 36, 18, 8],
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            position: 'bottom'
        },
        title: {
            display: true,
            text: 'How old are you?',
            fontColor: 'black'
        }
    }
});

// SCRAMBLED SURVEY COOK
var ctx = document.getElementById('scr_cook').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["Under 30min", "30min - 1hr", "1 - 2hrs", "Over 2hrs"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                'rgba(51, 55, 69, 1)',
                'rgba(230, 52, 98, 1)',
                'rgba(254, 95, 85, 1)',
                'rgba(199, 239, 207, 1)',
            ],
            data: [48, 130, 31, 3],
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'How much time do you spend on cooking (+ prep)?',
            fontColor: 'black'
        }
    }
});