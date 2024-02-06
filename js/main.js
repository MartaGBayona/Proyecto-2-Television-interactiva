
// selection of html and css elements
const remoteButtons = document.querySelectorAll("#remoteControl .button");

const onOffButton = document.getElementById("onOff");

const buttons = document.getElementsByClassName("button");

let arrayButtons = Array.from(buttons);

let screen = document.getElementById("screen");

const channel = document.querySelector("#bannerTop .channel"); 

const date = document.getElementById("date");

// const soundUp = document.getElementById("btnUp")

// const soundDown = document.getElementById("btnnDown")

// let infoSoundUp = document.getElementById("infoSoundUp");

// let infoSoundDown = document.getElementById("infoSoundDown")


//Tv on/Off, enable and disable buttons and date
let isTvOn = false;
disableRemote();
// infoSoundUp.style.visibility = "hidden";
// infoSoundDown.style.visibility = "hidden";
channel.style.visibility = "hidden";
date.style.display = "none"; 

function toggleTv() {
    isTvOn = !isTvOn;
    if (isTvOn) {
        screen.style.backgroundColor = 'gray';
        enableRemote();
        channel.style.visibility = "visible";
        channel.textContent = "Home"; 
        // infoSoundUp.style.visibility = "visible";
        // infoSoundDown.style.visibility = "visible";
        updateTime(); 
        toggleFecha();
        // volumeTimeout();
    } else {
        screen.style.backgroundColor = 'black';
        screen.classList.remove(screen.classList[screen.classList.length - 1]);
        // infoSoundUp.style.visibility = "hidden";
        // infoSoundDown.style.visibility = "hidden";
        disableRemote();
        channel.style.visibility = "hidden"; 
        toggleFecha();
    }
}

function enableRemote() {
    arrayButtons.forEach(button => {
        button.disabled = false;
    });
}

function disableRemote() {
    arrayButtons.forEach(button => {
        button.disabled = true;
    });
}

// Interactive channel and info integrated

arrayButtons.map(button => {
    button.addEventListener("click", (e) => {
        screen.classList.remove(screen.classList[screen.classList.length - 1]);
        screen.classList.add("canal" + e.target.id.slice(-1));
        console.log(screen)
        channel.textContent = "Canal " + e.target.textContent;
    });
});

// Date function
function updateTime() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    const dateTimeString = now.toLocaleString('en-En', options);
    date.textContent = dateTimeString;
}

function toggleFecha() {
    if (isTvOn) {
        date.style.display = "block";
        setTimeout(function() {
            date.style.display ="none";
        },5000);
    } else {
        date.style.display = "none";
    }
}

onOffButton.addEventListener('click', toggleTv);

setInterval(() => {
    if (isTvOn) {
        updateTime();
    }
}, 1000);

if (isTvOn) {
    toggleFecha();
}


//Buttons Sound

// let volumeTimeout;

// soundUp.addEventListener("click", function(){
//     clearTimeout(volumeTimeout);
//     infoSoundUp.style.display = "block";
//     volumeTimeout = setTimeout(function() {
//         bannerSound.style.display = "none";
//     }, 5000);
// });

// soundDown.addEventListener("click", function(){
//     clearTimeout(volumeTimeout);
//     infoSoundDown.style.display = "block";
//     volumeTimeout = setTimeout(function() {
//         bannerSound.style.display = "none";
//     }, 5000);
// });
