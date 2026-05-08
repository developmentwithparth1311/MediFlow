document.addEventListener('DOMContentLoaded', () => {
  
  const navLinks = document.querySelectorAll('.nav-links li');
  const viewSections = document.querySelectorAll('.view-section');
  const pageTitle = document.getElementById('page-title');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {

      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      viewSections.forEach(view => view.classList.remove('active'));
      
      const targetId = link.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');

      pageTitle.textContent = link.querySelector('span').textContent;
    });
  });

  const adherenceCtx = document.getElementById('adherenceChart');
  if (adherenceCtx) {
    new Chart(adherenceCtx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Doses Taken',
            data: [4, 4, 3, 4, 4, 3, 4],
            backgroundColor: '#4318FF',
            borderRadius: 6,
            barThickness: 20
          },
          {
            label: 'Missed',
            data: [0, 0, 1, 0, 0, 0, 0],
            backgroundColor: '#ee5d50',
            borderRadius: 6,
            barThickness: 20
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { 
            beginAtZero: true,
            max: 5,
            grid: { color: '#f0f3ff' }
          },
          x: {
            grid: { display: false }
          }
        },
        plugins: {
          legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } }
        }
      }
    });
  }

  const statusCtx = document.getElementById('statusPieChart');
  if (statusCtx) {
    new Chart(statusCtx.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Taken on Time', 'Taken Late', 'Missed'],
        datasets: [{
          data: [82, 12, 6],
          backgroundColor: ['#05cd99', '#ffce20', '#ee5d50'],
          borderWidth: 0,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { usePointStyle: true, padding: 20 } }
        },
        cutout: '75%'
      }
    });
  }

  const addMedBtn = document.getElementById('addMedBtn');
  if (addMedBtn) {
    addMedBtn.addEventListener('click', () => {
      alert('Adding a new medication! This would open a modal form and save config to the database/Arduino.');
    });
  }

});
