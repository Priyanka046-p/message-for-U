// ------------------------------
// Floating Hearts
// ------------------------------

const heartContainer = document.getElementById("heart-container");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    // Random position
    heart.style.left = Math.random() * 100 + "vw";

    // Random size
    const size = Math.random() * 30 + 20;
    heart.style.fontSize = size + "px";

    // Random duration
    heart.style.animationDuration = (Math.random() * 4 + 5) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);

}

// Create heart every 250ms
setInterval(createHeart, 250);


// ------------------------------
// Typewriter Effect
// ------------------------------

const message =
"Every heartbeat carries a wish... Click below to open your birthday surprise ❤️";

let index = 0;

function typingEffect(){

    if(index < message.length){

        document.getElementById("typing").innerHTML += message.charAt(index);

        index++;

        setTimeout(typingEffect,60);

    }

}

typingEffect();


// ------------------------------
// Open Surprise
// ------------------------------

const startBtn = document.getElementById("startBtn");
const landing = document.querySelector(".landing");
const wishPage = document.getElementById("wishPage");

startBtn.addEventListener("click",function(){

    music.play().catch(()=>{});

    welcome.classList.add("fadeOut");

    setTimeout(function(){

        welcome.style.display="none";

        loading.classList.remove("hidden");

        loading.classList.add("fadeIn");

        loadingAnimation();

    },1500);

});

// ------------------------------
// Celebration
// ------------------------------

const celebrateBtn=document.getElementById("celebrate");

const celebration=document.getElementById("celebration");

celebrateBtn.addEventListener("click",function(){

    wishPage.style.display="none";

    celebration.classList.remove("hidden");

    launchConfetti();

});


// ------------------------------
// Simple Confetti
// ------------------------------

function launchConfetti(){

    for(let i=0;i<150;i++){

        const confetti=document.createElement("div");

        confetti.innerHTML="🎉";

        confetti.style.position="fixed";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.top="-50px";

        confetti.style.fontSize=(Math.random()*20+15)+"px";

        confetti.style.transition="5s linear";

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.style.top="110vh";

            confetti.style.transform=
            `rotate(${Math.random()*720}deg)`;

        },100);

        setTimeout(()=>{

            confetti.remove();

        },5200);

    }

}


// ------------------------------
// Background Music
// ------------------------------

const music=document.getElementById("music");

startBtn.addEventListener("click",()=>{

    music.play().catch(()=>{
        console.log("Music autoplay blocked until user interaction.");
    });

});
