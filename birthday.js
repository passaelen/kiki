// 🎂 CHECK
function isBirthday(day, month){
  const today = new Date();
  return today.getDate() === day && (today.getMonth() + 1) === month;
}


// 🎆 FIREWORK (mon canvas 👍)
function launchFireworks(){

  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "9998";

  const particles = [];

  function createExplosion(x, y){
    for(let i=0; i<60; i++){
      particles.push({
        x, y,
        angle: Math.random() * 2 * Math.PI,
        speed: Math.random() * 4 + 2,
        life: 50,
        color: `hsl(${Math.random()*360},100%,60%)`
      });
    }
  }

  function animate(){

    // 🔥 fond semi transparent (traînée)
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {

      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      p.life--;

      ctx.fillStyle = p.color;

      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();

      if(p.life <= 0){
        particles.splice(i,1);
      }
    });

    requestAnimationFrame(animate);
  }

  const interval = setInterval(() => {
    createExplosion(
      Math.random() * canvas.width,
      Math.random() * canvas.height / 2
    );
  }, 400);

  animate();

  setTimeout(() => {
    clearInterval(interval);
    canvas.remove();
  }, 13000);
}


// 🎂 MAIN
function checkBirthday(config){

  if (!isBirthday(config.day, config.month)) return;

  // 🎂 MESSAGE
  const msg = document.createElement("div");
  msg.innerText = "🎂 Joyeux anniversaire !";
  msg.style.position = "fixed";
  msg.style.top = "20px";
  msg.style.left = "50%";
  msg.style.transform = "translateX(-50%)";
  msg.style.background = "#000";
  msg.style.color = "#fff";
  msg.style.padding = "10px 20px";
  msg.style.borderRadius = "10px";
  msg.style.zIndex = 9999;

  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 4000);

  // 🎆 FEU D'ARTIFICE
  launchFireworks();
}


// 🎂 CONFIG
checkBirthday({
  day: 3,
  month: 5
});