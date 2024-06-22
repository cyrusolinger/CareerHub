document.addEventListener('DOMContentLoaded', () => {
  console.log('CareerHub site loaded');

  // Job Outlook Chart
  const jobOutlookCtx = document.getElementById('jobOutlookChart').getContext('2d');
  const jobOutlookChart = new Chart(jobOutlookCtx, {
    type: 'line',
    data: {
      labels: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032'],
      datasets: [
        {
          label: 'Average Job Growth',
          data: [2, 2.5, 2.8, 3.0, 3.5, 3.8, 4.0, 4.3, 4.5, 4.7, 5.0],
          borderColor: '#3a6f41',
          backgroundColor: 'rgba(58, 111, 65, 0.2)',
          fill: true,
        },
        {
          label: 'Data Analyst Job Growth',
          data: [3, 3.2, 3.5, 3.8, 4.0, 4.2, 4.5, 4.8, 5.0, 5.3, 5.5],
          borderColor: '#d9534f',
          backgroundColor: 'rgba(217, 83, 79, 0.2)',
          fill: true,
        }
      ]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Job Outlook Comparison'
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Year'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Growth (%)'
          }
        }]
      }
    }
  });

  // Salary Projections Chart
  const salaryCtx = document.getElementById('salaryChart').getContext('2d');
  const salaryChart = new Chart(salaryCtx, {
    type: 'bar',
    data: {
      labels: ['Entry Level', 'Mid Level', 'Senior Level'],
      datasets: [{
        label: '',
        data: [60000, 85000, 110000],
        backgroundColor: ['#d9534f', '#3a6f41', '#003366']
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Salary Projections'
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Experience Level'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Salary ($)'
          },
          ticks: {
            beginAtZero: true,
            callback: function (value) {
              return '$' + value.toLocaleString();
            }
          }
        }]
      },
      legend: {
        display: false
      }
    }
  });

  // Job Distribution Donut Chart
  const jobDistributionCtx = document.getElementById('jobDistributionChart').getContext('2d');
  const jobDistributionChart = new Chart(jobDistributionCtx, {
    type: 'doughnut',
    data: {
      labels: ['On-site', 'Hybrid', 'Remote'],
      datasets: [{
        data: [40, 30, 30],
        backgroundColor: ['#d9534f', '#3a6f41', '#003366'],
        borderColor: ['#ffffff', '#ffffff', '#ffffff'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Job Distribution'
      },
      legend: {
        display: true,
        position: 'right'
      }
    }
  });

  highlightKeywords('.overview-text');
  highlightKeywords('.job-board-listings ul li p');

  // Back to Top button
  const backToTopButton = document.getElementById('back-to-top');
  window.onscroll = function () {
    scrollFunction();
  };

  backToTopButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  }
});

function highlightKeywords(selector) {
  const element = document.querySelector(selector);
  const keywords = ['interpret', 'business decisions', 'data-driven decisions', 'collecting', 'processing', 'analyzing data'];

  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    element.innerHTML = element.innerHTML.replace(regex, `<span class="tooltip">${keyword}<span class="tooltiptext">${getTooltipText(keyword)}</span></span>`);
  });
}

function getTooltipText(keyword) {
  const tooltips = {
    'interpret': 'Explain the meaning of (information, words, or actions).',
    'business decisions': 'Choices made by a company\'s executives or managers that can affect the company\'s performance.',
    'data-driven decisions': 'Making decisions based on data analysis and interpretation.',
    'collecting': 'Gathering data from various sources.',
    'processing': 'Cleaning and organizing data for analysis.',
    'analyzing data': 'Examining data sets to draw conclusions.'
  };
  return tooltips[keyword] || '';
}
