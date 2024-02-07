
// selection of html and css elements

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


//Declare the variable isTvOn to false so that it tracks the state of the screen
let isTvOn = false;
let volumeTimeout;

//functions that enables and disables the controller buttons
const enableRemote = () => {
    arrayButtons.forEach(button => {
        button.disabled = false;
    });
}

const disableRemote = () => {
    arrayButtons.forEach(button => {
        button.disabled = true;
    });
}

//Disables the TV and remote functions when loading the page
disableRemote()
infoSoundUp.style.visibility = "hidden";
infoSoundDown.style.visibility = "hidden";
channel.style.visibility = "hidden";
date.style.display = "none"; 

//Changes the state of the screen and the functionality of the controller
const toggleTv = () => {
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
onOffButton.addEventListener('click', toggleTv);


// Interactive channel and info integrated
arrayButtons.map(button => {
    button.addEventListener("click", (e) => {
        screen.classList.remove(screen.classList[screen.classList.length - 1]);
        screen.classList.add("canal" + e.target.id.slice(-1));
        channel.textContent = "Canal " + e.target.textContent;
    });
});

// Date function
const updateTime = () => {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: "numeric",
        hour12: true
    };
    const dateTimeString = now.toLocaleString('en-En', options);
    date.textContent = dateTimeString;
}

//date display range
toggleFecha = () => {
    if (isTvOn) {
        date.style.display = "block";
        setTimeout(() => {
            date.style.display ="none";
        },5000);
    } else {
        date.style.display = "none";
    }
}

//Time update
setInterval(() => {
    if (isTvOn) {
        updateTime();
    }
}, 1000);

//Sound and time interval buttons
soundUp.addEventListener("click", () => {
    if (isTvOn) {
        infoSoundUp.style.visibility = "visible";
        setTimeout(() => {
            infoSoundUp.style.visibility = "hidden";
        }, 1000);
    }
});

soundDown.addEventListener("click", () => {
    if (isTvOn) {
        infoSoundDown.style.visibility = "visible";
        setTimeout(() => {
            infoSoundDown.style.visibility = "hidden";
        }, 1000);
    }
});
