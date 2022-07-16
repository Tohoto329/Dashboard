var Earning = document.getElementById('lineChart').getContext('2d');
var Task = document.getElementById('Task').getContext('2d');
var myChart = new Chart(Earning, {
    type: 'line',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec'],
        datasets: [{
            label:'Earning in $',
            data: [20300,15000,54000,60010,80000,42000,94000,68000,70000,63210,87561,98529],
            backgroundColor: 
                'rgba(0,99,132)'
            ,
            borderColor: 
                'rgb(0,99,132)'
            
        ,}]
    },
    options: { 
        responsive: true,
    }
});



var myChart = new Chart(Task, {
    type: 'polarArea',
    data: {
        labels: ['Complete','Due','In-progress'],
        datasets: [{
            label:'Task',
            data: [3000,1200,1900],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            
        }]
    },
    options: {
        responsive: true,
    }
});

