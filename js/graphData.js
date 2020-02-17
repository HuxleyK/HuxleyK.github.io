
function player1()
{
  dataset1 = ['1', '5', '5', '5'];
  dataset = dataset1;
  makeChart();
}
function player2()
{
  dataset2 = ['10', '5', '5', '5'];
  dataset = dataset2;
  makeChart();
}



function makeChart()
{
    let myChart = document.getElementById('myChart').getContext('2d');

    let statChart = new Chart(myChart, {
      type:'bar', //bar... horizontal etc, pie, doughunt.
      data:{
        labels:['Accuracy', 'Attacking', 'Defence', 'Support'],
        datasets:[{
          label:'/20',
          data : dataset
        }]
      },

    })
  }
