async function grafica() {
    // La Data no se carga hasta que espere a obtener la data de la función
    data = await getData();

    const ctx = document.getElementById('graf').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.xl,
            datasets: [{
                label: 'Profesores de inicial por región',
                data: data.yl,
                backgroundColor: 
                    'rgba(255, 99, 132, 0.2)',     
                borderColor: 
                    'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

