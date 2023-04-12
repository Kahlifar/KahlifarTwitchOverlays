function startBackgroundAnimation() {
    setInterval(() => {
        for (let i = 1; i < 4; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.classList.add(['orange', 'light_blue', 'sky_blue', 'yellow'][Math.floor(Math.random() * 4)]);
            square.style.left = `${Math.random() * ([null, 80, 100, 120][i]) - 10}%`;
            square.style.animationDuration = `${Math.random() * 4 + 4}s`;
            document.body.appendChild(square);
        }
        window.addEventListener('animationend', (e) => {
            e.target.remove();
        });
    }, 1000 * 0.5);
}