// Loader Animation
const loader = document.getElementById("loader");
const openBtn = document.getElementById("openInvitation");

openBtn.addEventListener("click", () => {
    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 800);
});

// Countdown
const weddingDate = new Date("December 27, 2026 11:00:00").getTime();

const timer = setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {
        clearInterval(timer);

        document.getElementById("timer").innerHTML =
            "<h2>🎉 Today is the Wedding Day 🎉</h2>";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

}, 1000);

// Fade In Animation
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

document.addEventListener("click", function (e) {

    for (let i = 0; i < 12; i++) {

        const star = document.createElement("div");
        star.className = "sparkle";

        star.style.left = (e.clientX + (Math.random() * 40 - 20)) + "px";
        star.style.top = (e.clientY + (Math.random() * 40 - 20)) + "px";

        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 900);
    }

});