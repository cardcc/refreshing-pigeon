

function handleInfo(info, countryName) {

    let result = {};
    info.forEach( function(item, index, arr) {

        if ( item.country == countryName ) {
            result = item;
        }

    });

    return result;
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const info = {
    active: '',
    continent: '',
    country: '',
    deaths: '',
    population: '',
    recovered: '',
    updateDate: '',
    tests: '',
    total: ''
};


$(window).on('load', function() {


    const api = new Api('GET', 'https://covid-193.p.rapidapi.com/statistics','5b495de596mshbbdaa7322150fdcp1af9a1jsn9f39943924d4','covid-193.p.rapidapi.com');

    const chart1 = new Chart(
        document.getElementById('chart1'),
        barConfig
    );

    const chart2 = new Chart(
        document.getElementById('chart2'),
        pieConfig
    );

    function updateCountry(country) {

        api.getInfo().then( function (info) {

            if (!country) {
                country = info[randomNum(0,info.length-1)].country;
            }

            updateUi(handleInfo(info, country));

        });
    }


    function updateUi(values) {

        info.continent = 'N/A';
        info.country = 'N/A';
        info.population = 'N/A';
        info.total = 'N/A';
        info.active = 'N/A';
        info.recovered = 'N/A';
        info.deaths = 'N/A';
        info.updateDate = 'N/A';

        if ( values && values.hasOwnProperty('country')) {


            info.country = values.country;

            if (values.population) {
                info.population = values.population;
            }

            if ( values.continent ) {
                info.continent = values.continent;
            }

            if (values.hasOwnProperty('cases')) {

                if ( values.cases.total ) {
                    info.total = values.cases.total;
                }

                if ( values.cases.active ) {
                    info.active = values.cases.active;
                }

                if ( values.cases.recovered ) {
                    info.recovered = values.cases.recovered;
                }
            }

            if (values.hasOwnProperty('deaths')) {

                if ( values.deaths.total ) {
                    info.deaths = values.deaths.total;
                }
            }

            if (values.hasOwnProperty('tests')) {

                if ( values.tests.total ) {
                    info.tests = values.tests.total;
                }
            }

            if (values.hasOwnProperty('day')) {

                info.updateDate = values.day;

            }
        }

        document.getElementById('country1-country').innerHTML = info.continent+' / '+info.country;
        document.getElementById('country1-total').innerHTML = info.total;
        document.getElementById('country1-population').innerHTML = info.population;

        chart1.data.datasets[0].data[0] = info.total;
        chart1.data.datasets[0].data[1] = info.active;
        chart1.data.datasets[0].data[2] = info.recovered;
        chart1.data.datasets[0].data[3] = info.deaths;

        chart2.data.datasets[0].data[0] = info.active;
        chart2.data.datasets[0].data[1] = info.recovered;
        chart2.data.datasets[0].data[2] = info.deaths;

        chart1.update();

        chart2.update();
    }


    updateCountry();

    setInterval(function () {

        updateCountry();

    }, 4000);

});


