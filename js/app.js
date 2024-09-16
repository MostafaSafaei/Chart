fetch('../data.json')
.then(function(response){
  if(response.ok == true){
    return response.json();
  }
})
.then(function(data){
  console.log(data);
  for(let i in data){
    createChart(data,'bar', data[i].id)
  }
})


function createChart(data, type, Id){

const ctx = document.getElementById(Id);

  new Chart(ctx, {
    plugins: [ChartDataLabels],
    type: 'bar',
    data: {
      labels: data.map(row => row.date),
      datasets: [{
        label: '# of Votes',
        data: data.map(row => row.population, row => row.population),
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        legend:{
          display: true
        },
        datalabels: {
          anchor: 'end',
          align: 'bottom',
          color: 'red',
              font: {
                size: 32,
                weight: 'bold'
            }
        },
      },
      
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}