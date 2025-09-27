// Particles.js Initialization
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const button = document.getElementById('darkModeToggle');
    button.textContent = document.body.classList.contains('dark-mode') ? 'Desativar Dark Mode' : 'Ativar Dark Mode';
});

// Hamburger Menu Toggle
document.getElementById('menuToggle').addEventListener('click', () => {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('show');
    menu.classList.toggle('hidden');
});

// Adicionar Checklist
function adicionarChecklist() {
    const novoItem = prompt("Digite o novo item do checklist:");
    if (novoItem) {
        const ul = document.getElementById('checklistItems');
        const li = document.createElement('li');
        li.className = 'flex items-center hover-scale';
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'mr-2';
        const span = document.createElement('span');
        span.textContent = novoItem;
        li.appendChild(input);
        li.appendChild(span);
        ul.appendChild(li);
    }
}

// Sugestão de IA Simulada
function sugerirIA() {
    const input = document.getElementById('iaInput').value;
    const response = document.getElementById('iaResponse');
    response.textContent = input ? `Sugestão de IA: Adicione um checklist para "${input}" para garantir conformidade.` : 'Digite algo para sugestão.';
}

// Gráfico de Relatório com Chart.js
window.addEventListener('DOMContentLoaded', function() {
    const chartCanvas = document.getElementById('reportChart');
    if (chartCanvas) {
        const ctx = chartCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Legislação', 'Modelos e Cartilhas', 'Check lists', 'Relatórios'],
                datasets: [{
                    label: 'Consultas',
                    data: [30, 25, 20, 15],
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.7)',
                        'rgba(16, 185, 129, 0.7)',
                        'rgba(251, 191, 36, 0.7)',
                        'rgba(239, 68, 68, 0.7)'
                    ],
                    borderColor: [
                        'rgba(59, 130, 246, 1)',
                        'rgba(16, 185, 129, 1)',
                        'rgba(251, 191, 36, 1)',
                        'rgba(239, 68, 68, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: true, position: 'right' },
                    title: { display: true, text: 'Distribuição de Consultas' }
                }
            }
        });
    }
});

// Scroll-Triggered Fade-In Animations
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});
fadeElements.forEach(el => observer.observe(el));