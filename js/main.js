
const remoteButtons = document.querySelectorAll("#remoteControl .button");

const onOffButton = document.getElementById("onOff");

const buttons = document.getElementsByClassName("button");

let arrayButtons = Array.from(buttons);

let screen = document.getElementById("screen");

//TV On/Off

let isTvOn = false;

onOffButton.addEventListener('click', () => {
    isTvOn = !isTvOn;
    if (isTvOn) {
        screen.style.backgroundColor = '#222';
        enableRemote() ;
    } else {
        screen.style.backgroundColor = 'black';
        disableRemote() ;
    }
});

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

//Interactive buttons

arrayButtons.map(
    item => {
        item.addEventListener("click", (e) =>{
            screen.classList.remove(screen.classList[screen.classList.length - 1])
            screen.classList.add("canal" + e.target.id.slice(-1))
            console.log(screen)
        })
    }
);


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
setInterval(updateTime, 1000);
updateTime();

//Data hidden

const info = document.getElementById("data");

if (!isTvOn) {
    data.style.display = "none";

} else {
    data.style.display = "";
};