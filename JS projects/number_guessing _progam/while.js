const min = 50;
const max = 100;
const ans = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(ans);

let attempts = 0;
let guess;
let running = true;
while (running) {
    guess = window.prompt(`guess a number between ${min} ${max} `);
    guess = Number(guess);
    if (isNaN(guess)) {
        window.alert("please enter a number");
    } else if (guess < min || guess > max) {
        window.alert("please enter valid number");
    } else {
        attempts++;
        if (guess < ans) {
            window.alert("entered number is too low");
        } else if (guess > ans) {

            window.alert("entered number is too high");
        } else {
            window.alert(`correct ! the number was ${ans} and you took ${attempts} attempts`);
            running = false;
        }
    }
}