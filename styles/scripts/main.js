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
const ctx = document.getElementById('reportChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Item 1', 'Item 2', 'Item 3'],
        datasets: [{ label: 'Conformidade', data: [80, 90, 70], backgroundColor: 'rgba(54, 162, 235, 0.6)' }]
    },
    options: { scales: { y: { beginAtZero: true } }, responsive: true, maintainAspectRatio: false }
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