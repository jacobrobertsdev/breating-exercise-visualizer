let display = document.querySelector('.cycle-display');
let shape = document.querySelector('.shape');
let digit = document.querySelector('.digit');

const inhale = 4; // seconds for inhale
const hold = 7;   // seconds for hold
const exhale = 8; // seconds for exhale
let isBreathing = false; // State to track if the exercise is active
let seconds; // Timer
let countdown = 3;
let inhaleCounter, holdCounter, exhaleCounter; // Store interval IDs


function startCycle() {

    if (!isBreathing) {

        isBreathing = true;
        countdown = 3; // Reset countdown to 3 seconds

        display.textContent = `Starting in ${countdown}...`;

        const countdownInterval = setInterval(() => {
            countdown--;

            if (countdown <= 0) {
                clearInterval(countdownInterval); // Clear the countdown
                inhaleStart(); // Start the breathing cycle
            } else {
                display.textContent = `Starting in ${countdown}...`;
            }
        }, 1000);
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
        display.textContent = 'Click the circle or press any key to start / stop.';
        digit.textContent = '';

        shape.style.backgroundColor = `lightseagreen`;

    }
};


function inhaleStart() {
    seconds = 1;
    shape.style.transition = `width ${inhale}s ease-in-out, height ${inhale}s ease-in-out, background-color .4s ease`;
    display.textContent = 'Inhale for 4 seconds';
    shape.classList.replace('small', 'large');
    digit.textContent = seconds;

    inhaleCounter = setInterval(() => {


        seconds++;
        digit.textContent = seconds;

        if (seconds >= inhale) {
            clearInterval(inhaleCounter);
            holdStart();
        }
    }, 1000);
};


function holdStart() {
    seconds = 0;
    holdCounter = setInterval(() => {

        display.textContent = 'Hold for 7 seconds';
        shape.style.backgroundColor = `purple`;
        seconds++;
        digit.textContent = seconds;

        if (seconds >= hold) {
            clearInterval(holdCounter);
            exhaleStart();
        }
    }, 1000);
};


function exhaleStart() {

    seconds = 0;
    shape.style.transition = `width ${exhale}s ease-in-out, height ${exhale}s ease-in-out, background-color .4s ease`;

    exhaleCounter = setInterval(() => {

        display.textContent = 'Exhale for 8 seconds';
        shape.classList.replace('large', 'small');
        shape.style.backgroundColor = `lightseagreen`;
        seconds++;
        digit.textContent = seconds;

        if (seconds > exhale) {
            clearInterval(exhaleCounter);
            inhaleStart();
        }
    }, 1000);
};


window.addEventListener('keyup', () => {
    isBreathing ? stopCycle() : startCycle()
});

shape.addEventListener('click', () => {
    isBreathing ? stopCycle() : startCycle()
});
