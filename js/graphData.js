

  function updateChart()
  {
    statChart.data.datasets[0].data = [10,10,10,10];
    statChart.data.datasets[0].backgroundColor = [
    pattern.draw('square', '#ff6384'),
    pattern.draw('circle', '#36a2eb'),
    pattern.draw('diamond', '#cc65fe'),
    pattern.draw('triangle', '#ffce56')],
    statChart.options.title.text = 'Player 1';
    statChart.update();
  }

  function updateChart2()
  {
    statChart.data.datasets[0].data = [5,6,20,4];
    statChart.data.datasets[0].backgroundColor = [
    pattern.draw('square', '#8DBF8B'),
    pattern.draw('circle', '#F09856'),
    pattern.draw('diamond', '#FADC9C'),
    pattern.draw('triangle', '#ffce56')],
    statChart.options.title.text = 'Player 2';
    statChart.update();
  }

  function updateChart3()
  {
    statChart.data.datasets[0].data = [20,18,1,5];
    statChart.data.datasets[0].backgroundColor = [
    pattern.draw('square', '#EFA8EA'),
    pattern.draw('circle', '#18A4E0'),
    pattern.draw('diamond', '#FADC9C'),
    pattern.draw('triangle', '#97E5EF')],
    statChart.options.title.text = 'Player 3';
    statChart.update();
  }

  function updateChart4()
  {
    statChart.data.datasets[0].data = [20,0,20,0];
    statChart.data.datasets[0].backgroundColor = [
    pattern.draw('square', '#AAD0D9'),
    pattern.draw('circle', '#EED5D1'),
    pattern.draw('diamond', '#A7BF2E'),
    pattern.draw('triangle', '#F95A37')],
    statChart.options.title.text = 'Player 4';
    statChart.update();
  }

  function updateChart5()
  {
    statChart.data.datasets[0].data = [1,1,20,4];
    statChart.data.datasets[0].backgroundColor = [
    pattern.draw('square', '#ffce56'),
    pattern.draw('circle', '#8DBF8B'),
    pattern.draw('diamond', '#FADC9C'),
    pattern.draw('triangle', '#18A4E0')],
    statChart.options.title.text = 'Player 5';
    statChart.update();
  }
