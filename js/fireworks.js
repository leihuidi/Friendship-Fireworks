document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    const textElement = document.getElementById('typing-text');
    let fireworks = [];
    let particles = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    class Firework {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height;

            // 修改 height 的计算方式
            this.height = Math.random() * (canvas.height / 3); // 烟花爆炸高度限制在canvas高度的三分之一
            this.speed = 2;
            this.alpha = 1;
            this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            this.exploded = false;
            this.particleCount = 100;
        }

        update() {
            this.y -= this.speed;
            if (this.y < this.height) {
                this.explode();
                this.exploded = true;
            }
        }

        explode() {
            for (let i = 0; i < this.particleCount; i++) {
                particles.push(new Particle(this.x, this.y, this.color));
            }
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, 2, 10);
        }
    }

    class Particle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.size = Math.random() * 5 + 2;
            this.speedX = Math.random() * 6 - 3;
            this.speedY = Math.random() * 6 - 3;
            this.alpha = 1;
            this.friction = 0.96;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.speedX *= this.friction;
            this.speedY *= this.friction;
            this.alpha -= 0.02;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }

    function createFirework() {
        fireworks.push(new Firework());
    }

    function handleFireworks() {
        for (let i = 0; i < fireworks.length; i++) {
            fireworks[i].update();
            fireworks[i].draw();

            if (fireworks[i].exploded) {
                fireworks.splice(i, 1);
                i--;
            }
        }
    }

    function handleParticles() {
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            if (particles[i].alpha <= 0) {
                particles.splice(i, 1);
                i--;
            }
        }
    }

    // Typing Effect
    const text = "我们的友谊像烟花一样绚烂\n永远闪耀\n感谢你一路相伴\n我的挚友\n(这下面一般都是一些要求你转发)\n（转多少人考多少分之类的）\n（但我心地善良）\n（我不写）"; // 你想展示的文字
    let textIndex = 0;

    function typeText() {
        if (textIndex < text.length) {
            textElement.textContent += text.charAt(textIndex);
            textIndex++;
            setTimeout(typeText, 150); // 调整打字速度 (毫秒)
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // 清除画布，实现动画
        createFirework();
        handleFireworks();
        handleParticles();
        requestAnimationFrame(animate);
    }

    animate();
    typeText(); // 开始打字效果
});
