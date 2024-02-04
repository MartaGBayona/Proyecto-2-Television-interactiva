
const remoteButtons = document.querySelectorAll("#remoteControl .button");

const onOffButton = document.getElementById("onOff");

const buttons = document.getElementsByClassName("button");

let arrayButtons = Array.from(buttons);

let screen = document.getElementById("screen");

//TV On/Off

let isTvOn = false;

remoteControl.addEventListener('click', (e) => {
    isTvOn = !isTvOn;
    if (isTvOn) {
        screen.style.backgroundColor = '#222';
        enableRemote();
    } else {
        screen.style.backgroundColor = 'black';
        disableRemote();
    }
});

function enableRemote() {
    remoteButtons.forEach(button => {
        button.disabled = false;
    });
}

function disableRemote() {
    remoteButtons.forEach(button => {
        button.disabled = true;
    });
}

//Interactive buttons

arrayButtons.map(
    item => {
        item.addEventListener("click", (e) =>{
            screen.classList.remove(screen.classList[screen.classList.length - 1])
            screen.classList.add("canal" + e.target.id.slice(-1))
        })
    }
)

//Interactive date

function updateTime() {
    const data = document.getElementById("data");
    const now = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };
    const dateTimeString = now.toLocaleString('en-En', options);
    data.textContent = dateTimeString;
}

// Actualizar la hora cada segundo
setInterval(updateTime, 1000);
