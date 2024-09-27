let inhaleTimer = document.querySelector('.inhale');
let holdTimer = document.querySelector('.hold');
let exhaleTimer = document.querySelector('.exhale');
let shape = document.querySelector('.shape');
let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');

const inhale = 4; // seconds for inhale
const hold = 7;   // seconds for hold
const exhale = 8; // seconds for exhale
let isBreathing = false; // State to track if the exercise is active
let seconds = 0; // Timer counter
let inhaleCounter, holdCounter, exhaleCounter; // Store interval IDs




function startCycle() {
    if (!isBreathing) {
        inhaleStart();
        isBreathing = true;

    }
}

function stopCycle() {
    if (isBreathing) {
        clearInterval(inhaleCounter);
        clearInterval(holdCounter);
        clearInterval(exhaleCounter);
        isBreathing = false;
        seconds = 0;
        inhaleTimer.textContent = 'Inhale: ' + seconds;
        holdTimer.textContent = 'Hold: ' + seconds;
        exhaleTimer.textContent = 'Exhale: ' + seconds;
        shape.classList.replace('large', 'small');

    }
}


function inhaleStart() {
    shape.style.transition = `width ${inhale}s ease-in, height ${inhale}s ease-in, background-color .4s ease`;
    shape.classList.replace('small', 'large');

    inhaleCounter = setInterval(() => {
        seconds++;
        inhaleTimer.textContent = 'Inhale: ' + seconds;

        if (seconds >= inhale) {
            clearInterval(inhaleCounter);
            seconds = 0;
            holdStart();
        }
    }, 1000);
}


function holdStart() {
    shape.style.backgroundColor = `purple`;
    holdCounter = setInterval(() => {
        seconds++;
        holdTimer.textContent = 'Hold: ' + seconds;

        if (seconds >= hold) {
            clearInterval(holdCounter);
            seconds = 0;
            exhaleStart();
        }
    }, 1000);
}


function exhaleStart() {
    shape.style.backgroundColor = `lightseagreen`;
    shape.style.transition = `width ${exhale}s ease-in, height ${exhale}s ease-in, background-color .4s ease`;
    shape.classList.replace('large', 'small');

    exhaleCounter = setInterval(() => {
        seconds++;
        exhaleTimer.textContent = 'Exhale: ' + seconds;
        if (seconds >= exhale) {
            clearInterval(exhaleCounter);
            seconds = 0;
            inhaleStart();
        }
    }, 1000);
}



startButton.addEventListener('click', startCycle);
stopButton.addEventListener('click', stopCycle);