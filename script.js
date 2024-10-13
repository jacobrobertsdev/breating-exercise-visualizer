let display = document.querySelector('.cycle-display');
let shape = document.querySelector('.shape');
let digit = document.querySelector('.digit');

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
        shape.classList.replace('large', 'small');
        clearInterval(inhaleCounter);
        clearInterval(holdCounter);
        clearInterval(exhaleCounter);
        isBreathing = false;
        seconds = 0;
        display.textContent = 'Click the circle to start and stop.';
        digit.textContent = '';

        shape.style.backgroundColor = `lightseagreen`;

    }
}


function inhaleStart() {

    shape.style.transition = `width ${inhale}s ease-in-out, height ${inhale}s ease-in-out, background-color .4s ease`;
    inhaleCounter = setInterval(() => {

        shape.classList.replace('small', 'large');
        seconds++;
        display.textContent = 'Inhale';
        digit.textContent = seconds;

        if (seconds >= inhale) {
            clearInterval(inhaleCounter);
            seconds = 0;
            holdStart();
        }
    }, 1000);
}


function holdStart() {

    holdCounter = setInterval(() => {
        shape.style.backgroundColor = `purple`;
        seconds++;
        display.textContent = 'Hold';
        digit.textContent = seconds;
        if (seconds >= hold) {
            clearInterval(holdCounter);
            seconds = 0;
            exhaleStart();
        }
    }, 1000);
}


function exhaleStart() {

    shape.style.transition = `width ${exhale}s ease-in-out, height ${exhale}s ease-in-out, background-color .4s ease`;

    exhaleCounter = setInterval(() => {

        shape.classList.replace('large', 'small');
        shape.style.backgroundColor = `lightseagreen`;
        seconds++;
        display.textContent = 'Exhale';
        digit.textContent = seconds;
        if (seconds >= exhale) {
            clearInterval(exhaleCounter);
            seconds = 0;
            inhaleStart();
        }
    }, 1000);
}



shape.addEventListener('click', () => {
    isBreathing ? stopCycle() : startCycle()
});
