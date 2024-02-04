
const remoteButtons = document.querySelectorAll("#remoteControl .button");

const onOffButton = document.getElementById("onOff");

const buttons = document.getElementsByClassName("button");

let arrayButtons = Array.from(buttons);

let screen = document.getElementById("screen");

arrayButtons.map(
    item => {
        item.addEventListener("click", (evento) =>{
            screen.classList.remove(screen.classList[screen.classList.length - 1])
            screen.classList.add("canal" + evento.target.id.slice(-1))
        })
    }
)