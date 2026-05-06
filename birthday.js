// 🎂 CHECK
function isBirthday(day, month){
  const today = new Date();
  return today.getDate() === day && (today.getMonth() + 1) === month;
}

// 🎆 FIREWORK
function launchFireworks({ durationMs = 12000 } = {}){
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) return;

  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "9998";

  document.body.appendChild(canvas);

  function resizeCanvas(){
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas, { passive: true });

  const particles = [];
  let rafId = null;
  let intervalId = null;
  let running = true;

  function createExplosion(x, y){
    const count = 75 + Math.floor(Math.random() * 35);

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4.5 + 1.5;

      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 55 + Math.random() * 30,
        maxLife: 85,
        radius: Math.random() * 2 + 1,
        gravity: 0.04 + Math.random() * 0.03,
        drag: 0.985,
        color: `hsl(${Math.random() * 360}, 100%, 62%)`
      });
    }
  }

  function animate(){
    if (!running) return;

    // Léger fondu pour garder une traînée sans assombrir brutalement la page.
    ctx.fillStyle = "rgba(7, 11, 20, 0.18)";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];

      p.vx *= p.drag;
      p.vy = p.vy * p.drag + p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 1;

      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }

      const alpha = Math.max(p.life / p.maxLife, 0);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    rafId = requestAnimationFrame(animate);
  }

  function scheduleBursts(){
    createExplosion(
      Math.random() * window.innerWidth,
      Math.random() * (window.innerHeight * 0.5) + 40
    );

    intervalId = setInterval(() => {
      const bursts = Math.random() > 0.7 ? 2 : 1;
      for (let i = 0; i < bursts; i++) {
        createExplosion(
          Math.random() * window.innerWidth,
          Math.random() * (window.innerHeight * 0.55) + 30
        );
      }
    }, 320);
  }

  function cleanup(){
    running = false;
    if (intervalId) clearInterval(intervalId);
    if (rafId) cancelAnimationFrame(rafId);
    window.removeEventListener("resize", resizeCanvas);
    canvas.remove();
  }

  scheduleBursts();
  animate();

  setTimeout(cleanup, durationMs);
}

// 🎂 MAIN
function checkBirthday(config){
  if (!isBirthday(config.day, config.month)) return;

  const msg = document.createElement("div");
  msg.innerText = "🎂 Joyeux anniversaire ma p'tite Kiki 😘😘😘....Papa qui t'❤️ !";
  msg.style.position = "fixed";
  msg.style.top = "20px";
  msg.style.left = "50%";
  msg.style.transform = "translateX(-50%)";
  msg.style.background = "rgba(0,0,0,0.78)";
  msg.style.color = "#fff";
  msg.style.padding = "10px 20px";
  msg.style.borderRadius = "10px";
  msg.style.zIndex = "9999";

  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 4000);

  launchFireworks();
}

// 🎂 CONFIG
checkBirthday({
  day: 05,
  month: 2
});
