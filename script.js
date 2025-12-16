console.log("Aero website loaded successfully.");
/*sTARS JS */
const starCount = 300; // increase this to 500+ for a very dense starfield
const body = document.body;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Random position
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';

    // Random size (1px–3px)
    const size = Math.random() * 2 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';

    // Random opacity for depth
    star.style.opacity = Math.random() * 0.8 + 0.2;

    // Styling
    star.style.position = 'fixed';
    star.style.background = 'white';
    star.style.borderRadius = '50%';
    star.style.pointerEvents = 'none';

    // Random animation speed
    const speed = Math.random() * 20 + 10; // 10s–30s
    star.style.animation = starMove ${speed}s linear infinite;

    body.appendChild(star);
};
