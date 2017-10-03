// BEYONDTOURISM SURVEY AGE
var ctx = document.getElementById('dd_age').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["< 17", "18", "19", "20", "21", "22 <"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                'rgba(51, 55, 69, 1)',
                'rgba(230, 52, 98, 1)',
                'rgba(254, 95, 85, 1)',
                'rgba(199, 239, 207, 1)',
                'rgba(238, 245, 219, 1)',
            ],
            data: [0, 8, 10, 4, 9, 9],
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
var ctx = document.getElementById('dd_death').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["Accidents", "Cancer", "Heart Disease", "Respiratory Disease"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                'rgba(51, 55, 69, 1)',
                'rgba(230, 52, 98, 1)',
                'rgba(254, 95, 85, 1)',
                'rgba(199, 239, 207, 1)',
            ],
            data: [6, 6, 26, 2],
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'What is the leading cause of death in America?',
            fontColor: 'black'
        }
    }
});
