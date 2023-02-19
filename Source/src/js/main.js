  
import Typed from 'typed.js';

// simulate text typing
new Typed('#typed-text', {
    strings: ['Phygitals', 'physical NFTs', 'EVM', 'digital twins', 'digital x physical'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 500,
    startDelay: 1000,
    loop: true
});

// draw circles
document.addEventListener("DOMContentLoaded", (event) => {
    const canvas = document.getElementById('circle-layer');
    const ctx = canvas.getContext('2d');
  
    // params: x-position, y-position, radius, line width
    const drawCircle = (x, y, r, w) => {
        ctx.beginPath();
        ctx.lineWidth = w;
        ctx.arc(x, y, r, 0, 2 * Math.PI, false);
        ctx.strokeStyle = '#000000';
        ctx.stroke();
    }
  
    // resize observer
    const observer = new ResizeObserver(() => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
  
      drawCircle(canvas.width, canvas.height, canvas.width * 0.100, canvas.width * 0.040);
      drawCircle(canvas.width * 0.685, canvas.height / 1.7, canvas.width * 0.062, canvas.width * 0.024);
      drawCircle(canvas.width * 0.833, 0, canvas.width * 0.040, canvas.width * 0.015);
    });
    observer.observe(canvas)
  });