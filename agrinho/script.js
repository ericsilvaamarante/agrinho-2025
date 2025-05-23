

// Efeito de rolagem suave para os links do menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const logo = document.getElementById('dvd-logo');
let x = 50, y = 50;
let dx = 2, dy = 0; // Velocidade
let colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
let currentColor = 0;

function animate() {
    // Movimento
    x += dx;
    y += dy;
    
    // Detecta colisão com bordas
    if (x + logo.width >= window.innerWidth || x <= 0) {
        dx = -dx;
        changeColor();
    }
    if (y + logo.height >= window.innerHeight || y <= 0) {
        dy = -dy;
        changeColor();
    }
    
    // Aplica nova posição
    logo.style.left = x + 'px';
    logo.style.top = y + 'px';
    
    requestAnimationFrame(animate);
}

function changeColor() {
    logo.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
}

// Inicia animação
animate();

