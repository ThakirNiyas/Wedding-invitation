const loader = document.getElementById("loader");
const openBtn = document.getElementById("openInvitation");

if (openBtn && loader) {
    let hasOpened = false;

    openBtn.addEventListener("click", () => {
        if (hasOpened) {
            return;
        }

        hasOpened = true;
        openBtn.classList.add("open");

        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 4200);

        setTimeout(() => {

            loader.style.display = "none";

            document.getElementById("musicToggle").style.display = "flex";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 5000);
    });
}

const weddingDate = new Date("December 27, 2026 11:00:00").getTime();

function updateFlip(id, value) {

    const el = document.getElementById(id);

    if (el.textContent != value) {

        el.classList.remove("flip");

        void el.offsetWidth;

        el.textContent = value;

        el.classList.add("flip");
    }

}

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "<h2>Today is the Wedding Day</h2>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    updateFlip("days", days);
    updateFlip("hours", hours);
    updateFlip("minutes", minutes);
    updateFlip("seconds", seconds);
}, 1000);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

let scrollTimeout;

window.addEventListener("scroll", () => {

    clearTimeout(scrollTimeout);

    for (let i = 0; i < 2; i++) {

        const bubble = document.createElement("span");

        bubble.className = "scrollBubble";

        bubble.style.left = Math.random() * window.innerWidth + "px";
        bubble.style.top = (window.innerHeight + 20) + "px";

        const size = 2 + Math.random() * 4; // 2px - 6px

        bubble.style.width = size + "px";
        bubble.style.height = size + "px";

        bubble.style.animationDuration = (8 + Math.random() * 6) + "s";

        document.body.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
        }, 14000);

    }

});

document.addEventListener("pointerdown", (e) => {

    for (let i = 0; i < 6; i++) {

        const star = document.createElement("div");

        star.className = "sparkle";

        star.style.left = e.clientX + "px";
        star.style.top = e.clientY + "px";

        const x = (Math.random() - 0.5) * 160;
        const y = (Math.random() - 0.5) * 160;

        star.style.setProperty("--x", x + "px");
        star.style.setProperty("--y", y + "px");

        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 1000);

    }

});

let sparkleThrottle = false;

window.addEventListener("scroll", () => {

    if (sparkleThrottle) return;

    sparkleThrottle = true;

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    for (let i = 0; i < 6; i++) {

        const star = document.createElement("div");

        star.className = "sparkle";

        star.style.left = x + "px";
        star.style.top = y + "px";

        const dx = (Math.random() - 0.5) * 70;
        const dy = (Math.random() - 0.5) * 70;

        star.style.setProperty("--x", dx + "px");
        star.style.setProperty("--y", dy + "px");

        document.body.appendChild(star);

        setTimeout(() => star.remove(), 900);

    }

    setTimeout(() => {
        sparkleThrottle = false;
    }, 120);

});

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicToggle");

music.volume = 0.4;

openBtn.addEventListener("click", () => {

    music.play()
        .then(() => {
            musicBtn.style.display = "flex";
            musicBtn.innerHTML = "🎵";
            musicBtn.classList.add("playing");
        })
        .catch(err => {
            console.log(err);
        });

});

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();
        musicBtn.innerHTML = "🎵";
        musicBtn.classList.add("playing");

    } else {

        music.pause();
        musicBtn.innerHTML = "🔇";
        musicBtn.classList.remove("playing");

    }

});

/* -------------------------------
Golden Scroll Glow
-------------------------------- */

const glow = document.createElement("div");
glow.className = "scroll-glow";

document.body.appendChild(glow);

let hideGlow;

window.addEventListener("scroll", () => {

    glow.style.left = (window.innerWidth / 2) + "px";
    glow.style.top = (window.innerHeight * 0.75) + "px";

    glow.style.opacity = ".9";

    clearTimeout(hideGlow);

    hideGlow = setTimeout(() => {
        glow.style.opacity = "0";
    }, 180);

});

function updateValue(id, value) {
    const el = document.getElementById(id);

    if (el.textContent != value) {
        el.textContent = value;

        el.classList.remove("flip");
        void el.offsetWidth;
        el.classList.add("flip");
    }
}