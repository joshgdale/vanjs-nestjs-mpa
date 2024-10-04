const Main = () => {
  const string = window.dateFns.format(new Date(), 'yyyy');

  setTimeout(() => {
    renderChart();
  }, 0);

  return div(
    { class: 'flex flex-col' },
    p('👋Hello from Alt.js'),
    p(string),
    canvas({ id: 'myChart' }),
  );
};

function renderChart() {
  const ctx = document.getElementById('myChart');
  console.log('CTX', ctx);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: state.chartData,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
