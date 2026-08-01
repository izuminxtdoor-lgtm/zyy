// ==========================
// Falling Hearts Animation
// ==========================

const heartsContainer = document.getElementById("hearts-container");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💜";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (12 + Math.random() * 20) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heart.style.opacity = Math.random();

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

setInterval(createHeart, 350);



window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


const bgMusic = document.getElementById("bgMusic");

if (bgMusic) {

    bgMusic.volume = 0.5;

    bgMusic.play().catch(() => {
  
    });

}