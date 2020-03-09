

  function updateChart()//Average Gold Per Minute
  {
    statChart.data.datasets[0].data = [385,346, 406, 428, 266];
    statChart.data.datasets[0].backgroundColor = [
	pattern.draw('square', '#ff6384'),
	pattern.draw('circle', '#36a2eb'),
	pattern.draw('diamond', '#cc65fe'),
	pattern.draw('triangle', '#ffce56'),
	pattern.draw('circle', '#ff6384')],
    statChart.options.title.text = 'Average Gold Per Minute';
	statChart.options.scales.yAxes[0].ticks.max = 500;
    statChart.update();
  }

  function updateChart2()// Average Cs Per Minute
  {
    statChart.data.datasets[0].data = [8.1, 4.8, 8.8, 9.6, 1.1];
    statChart.data.datasets[0].backgroundColor = [
    pattern.draw('square', '#8DBF8B'),
    pattern.draw('circle', '#F09856'),
    pattern.draw('diamond', '#FADC9C'),
    pattern.draw('triangle', '#ffce56'),
	pattern.draw('square', '#8DBF8B')],
	statChart.options.title.text = 'CS Per Minute';
    statChart.options.scales.yAxes[0].ticks.max = 10;
    statChart.update();
  }

  function updateChart3()//KDA
  {
    statChart.data.datasets[0].data = [3.6 , 3.2, 5.4, 4.7, 4.8];
    statChart.data.datasets[0].backgroundColor = [
    pattern.draw('square', '#EFA8EA'),
    pattern.draw('circle', '#18A4E0'),
    pattern.draw('diamond', '#FADC9C'),
    pattern.draw('triangle', '#97E5EF')],
    statChart.options.scales.yAxes[0].ticks.max = 15;
    statChart.options.title.text = 'KDA';
    statChart.update();
  }

  function updateChart4()//Win Percentage
  {
    statChart.data.datasets[0].data = [64 , 51, 62, 52, 62];
    statChart.data.datasets[0].backgroundColor = [
    pattern.draw('square', '#AAD0D9'),
    pattern.draw('circle', '#EED5D1'),
    pattern.draw('diamond', '#A7BF2E'),
    pattern.draw('triangle', '#F95A37')],
    statChart.options.scales.yAxes[0].ticks.max = 100;
    statChart.options.title.text = 'Win %';
    statChart.update();
  }
