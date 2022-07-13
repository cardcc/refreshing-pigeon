
const barData = {
    labels: [
        'Total',
        'Active',
        'Recovered',
        'Deaths'
    ],
    datasets: [{
        label: '',
        data: [0, 0, 0, 0],
        backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 159, 64)',
            'rgb(75, 192, 192)',
            'rgb(255, 99, 132)',
        ],
        borderWidth: 1
    }]
};

const barConfig = {
    type: 'bar',
    data: barData,
    options: {
        plugins: {
            legend: {display: false},
        }
    }

};

const pieData = {
    labels: [
        'Active',
        'Recovered',
        'Deaths'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [0, 0, 0],
        backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)'
        ],
        hoverOffset: 4
    }]
};

const pieConfig = {
    type: 'doughnut',
    data: pieData,
};

