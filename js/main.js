
// selection of html and css elements
const remoteButtons = document.querySelectorAll("#remoteControl .button");

const onOffButton = document.getElementById("onOff");

const buttons = document.getElementsByClassName("button");

let arrayButtons = Array.from(buttons);

let screen = document.getElementById("screen");

const channel = document.querySelector("#bannerTop .channel"); 

const date = document.getElementById("date");

const soundUp = document.getElementById("btnUp")

const soundDown = document.getElementById("btnDown")

const infoSoundUp = document.getElementById("infoSoundUp");

const infoSoundDown = document.getElementById("infoSoundDown")


//Tv on/Off, enable and disable buttons and date
let isTvOn = false;
let volumeTimeout;

disableRemote();
infoSoundUp.style.visibility = "hidden";
infoSoundDown.style.visibility = "hidden";
channel.style.visibility = "hidden";
date.style.display = "none"; 


toggleTv = () => {
    isTvOn = !isTvOn;
    if (isTvOn) {
        screen.style.backgroundColor = '#767981';
        enableRemote();
        channel.style.visibility = "visible";
        channel.textContent = "Home"; 
        updateTime(); 
        toggleFecha();

    } else {
        screen.style.backgroundColor = 'black';
        screen.classList.remove(screen.classList[screen.classList.length - 1]);
        disableRemote();
        infoSoundUp.style.visibility = "hidden";
        infoSoundDown.style.visibility = "hidden";
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
        channel.textContent = "Canal " + e.target.textContent;
    });
});

// Date function

onOffButton.addEventListener('click', toggleTv);

const updateTime = () => {
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

const toggleFecha = () => {
    if (isTvOn) {
        date.style.display = "block";
        setTimeout (() => {
            date.style.display ="none";
        },5000);
    } else {
        date.style.display = "none";
    }
}




//Buttons Sound

soundUp.addEventListener("click", (e) => {
    if (isTvOn) {
        clearTimeout(volumeTimeout);
        infoSoundUp.style.visibility = "visible";
        volumeTimeout = setTimeout((e) => {
            infoSoundUp.style.visibility = "hidden";
        }, 2500);
    }
});

soundDown.addEventListener("click", (e) => {
    if (isTvOn) {
        clearTimeout(volumeTimeout);
        infoSoundDown.style.visibility = "visible";
        volumeTimeout = setTimeout((e) => {
            infoSoundDown.style.visibility = "hidden";
        }, 2500);
    }
});
