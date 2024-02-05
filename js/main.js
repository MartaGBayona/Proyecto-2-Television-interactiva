
const remoteButtons = document.querySelectorAll("#remoteControl .button");
const onOffButton = document.getElementById("onOff");
const buttons = document.getElementsByClassName("button");
let arrayButtons = Array.from(buttons);
let screen = document.getElementById("screen");
const channel = document.querySelector("#bannerTop .channel"); // Seleccionamos la clase channel
const data = document.getElementById("data");

// Inicialmente, la TV está apagada
let isTvOn = false;
disableRemote(); // Deshabilitamos los botones del control remoto
channel.style.visibility = "hidden"; // Ocultamos el canal
data.style.display = "none"; // Ocultamos la fecha y hora

// Función para encender o apagar la TV y actualizar la interfaz
function toggleTv() {
    isTvOn = !isTvOn;
    if (isTvOn) {
        screen.style.backgroundColor = '#6A687A';
        enableRemote();
        channel.style.visibility = "visible"; // Mostramos el canal
        channel.textContent = "Canal 1"; // Inicialmente mostramos el canal 1
        updateTime(); // Actualizamos la fecha y hora
        toggleFecha(); // Mostramos la fecha si la TV está encendida
    } else {
        screen.style.backgroundColor = 'black';
        screen.classList.remove(screen.classList[screen.classList.length - 1]);
        disableRemote();
        channel.style.visibility = "hidden"; // Ocultamos el canal
        toggleFecha(); // Ocultamos la fecha si la TV está apagada
    }
}

// Función para habilitar el control remoto
function enableRemote() {
    arrayButtons.forEach(button => {
        button.disabled = false;
    });
}

// Función para deshabilitar el control remoto
function disableRemote() {
    arrayButtons.forEach(button => {
        button.disabled = true;
    });
}

// Función para actualizar el canal al hacer clic en los botones del control remoto
arrayButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        screen.classList.remove(screen.classList[screen.classList.length - 1]);
        screen.classList.add("canal" + e.target.id.slice(-1));
        channel.textContent = "Canal " + e.target.textContent; // Actualizamos el canal
    });
});

// Función para actualizar la fecha y hora
function updateTime() {
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

// Función para mostrar u ocultar la fecha según el estado de la TV
function toggleFecha() {
    if (isTvOn) {
        data.style.display = "block"; // Mostramos la fecha si la TV está encendida
    } else {
        data.style.display = "none"; // Ocultamos la fecha si la TV está apagada
    }
}

// Evento click para el botón de encendido/apagado de la TV
onOffButton.addEventListener('click', toggleTv);

// Actualizamos la fecha y hora cada segundo si la TV está encendida
setInterval(() => {
    if (isTvOn) {
        updateTime();
    }
}, 1000);

// Mostramos la fecha y hora inicialmente si la TV está encendida
if (isTvOn) {
    toggleFecha();
}