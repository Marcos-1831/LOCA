const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");

const text = 
"Desde un pequeño rincón del universo quería escribirte algo especial. Cada estrella representa un momento, cada brillo un recuerdo y cada palabra una emoción que no siempre se puede explicar. ✨🌙";

const typingText = document.getElementById("typing-text");

let index = 0;
let opened = false;


/* ==========================
   ABRIR CARTA
========================== */

openButton.addEventListener("click", () => {

    if(!opened){

        envelope.classList.add("open");

        startTyping();

        openButton.innerHTML = "Carta abierta 💌";

        opened = true;

    }

});



/* ==========================
   EFECTO ESCRITURA
========================== */


function startTyping(){

    typingText.innerHTML = "";

    index = 0;

    const typing = setInterval(()=>{


        typingText.innerHTML += text[index];

        index++;


        if(index >= text.length){

            clearInterval(typing);

        }


    },40);

}




/* ==========================
        MUSICA
========================== */


const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

let playing = false;


musicButton.addEventListener("click",()=>{


    if(!playing){

        music.play();

        musicButton.innerHTML="⏸ Pausar música";

        playing=true;

    }else{


        music.pause();

        musicButton.innerHTML="🎵 Música";

        playing=false;

    }


});





/* ==========================
   CREAR ESTRELLAS EXTRA
========================== */


function createStars(){


    const starsContainer =
    document.querySelector(".stars");


    for(let i=0;i<80;i++){


        let star=document.createElement("span");


        star.style.position="absolute";

        star.style.width=
        Math.random()*3+"px";


        star.style.height=
        star.style.width;


        star.style.background="white";

        star.style.borderRadius="50%";


        star.style.left=
        Math.random()*100+"%";


        star.style.top=
        Math.random()*100+"%";


        star.style.animation=
        `twinkle ${2+Math.random()*3}s infinite`;


        starsContainer.appendChild(star);


    }


}


createStars();





/* ==========================
   CORAZONES FLOTANTES
========================== */


function createHeart(){


    const heart=document.createElement("div");


    heart.innerHTML="❤️";


    heart.style.position="fixed";

    heart.style.left=
    Math.random()*100+"vw";


    heart.style.bottom="-20px";


    heart.style.fontSize=
    15+Math.random()*25+"px";


    heart.style.animation=
    "floatHeart 6s linear";


    document.body.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },6000);


}


setInterval(createHeart,1200);

/* ==========================
       REPRODUCTOR MUSICAL
========================== */


const music = document.getElementById("music");

const playButton = document.getElementById("play");

const progress = document.getElementById("progress");

const volume = document.getElementById("volume");

const player = document.querySelector(".music-player");


let isPlaying = false;



// PLAY / PAUSA

playButton.addEventListener("click",()=>{


    if(!isPlaying){

        music.play();

        playButton.innerHTML="⏸";

        player.classList.add("music-playing");

        isPlaying=true;


    }else{


        music.pause();

        playButton.innerHTML="▶️";

        player.classList.remove("music-playing");

        isPlaying=false;

    }


});





// ACTUALIZAR BARRA DE TIEMPO

music.addEventListener("timeupdate",()=>{


    if(music.duration){


        progress.value =
        (music.currentTime / music.duration) * 100;


    }


});





// MOVER CANCIÓN

progress.addEventListener("input",()=>{


    music.currentTime =
    (progress.value / 100) * music.duration;


});





// VOLUMEN

volume.addEventListener("input",()=>{


    music.volume =
    volume.value;


});





// CUANDO TERMINA

music.addEventListener("ended",()=>{


    playButton.innerHTML="▶️";

    player.classList.remove("music-playing");

    isPlaying=false;


});





/* ==========================
       BOTONES FUTUROS
========================== */


const prev =
document.getElementById("prev");


const next =
document.getElementById("next");



prev.addEventListener("click",()=>{

    alert("Próximamente: canción anterior 🎵");

});



next.addEventListener("click",()=>{

    alert("Próximamente: siguiente canción 🎵");

});




/* ==========================
   ANIMACIONES CSS EXTRA
========================== */


const style=document.createElement("style");

style.innerHTML=`

@keyframes twinkle{

0%,100%{
opacity:.3;
transform:scale(.8);
}

50%{
opacity:1;
transform:scale(1.5);
}

}


@keyframes floatHeart{

from{

transform:
translateY(0)
rotate(0deg);

opacity:1;

}


to{

transform:
translateY(-110vh)
rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);
