// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Simulating live stats
    const accidentsToday = document.getElementById('accidentsToday');
    const livesLostToday = document.getElementById('livesLostToday');
    let accidentCount = 0;
    let livesLost = 0;

    setInterval(() => {
        accidentCount += Math.floor(Math.random() * 10);
        livesLost += Math.floor(Math.random() * 5);
        accidentsToday.textContent = accidentCount;
        livesLostToday.textContent = livesLost;
    }, 1000);

    // Drawing a simple chart for accident hotspots
    const ctx = document.getElementById('accidentMap').getContext('2d');
    new Chart(ctx, {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Hotspots',
                data: [
                    { x: -20, y: 30, r: 15 },
                    { x: 10, y: -10, r: 20 },
                    { x: 25, y: 40, r: 10 },
                    { x: -30, y: -20, r: 25 }
                ],
                backgroundColor: 'rgba(255, 77, 77, 0.6)'
            }]
        },
        options: {
            scales: {
                x: { beginAtZero: true },
                y: { beginAtZero: true }
            }
        }
    });
});
