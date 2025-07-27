const min = document.getElementById("mini");
const max = document.getElementById("max");
const SetLimits = document.getElementById("submtbtn");
const Generate = document.getElementById("randm");
const Guessing = document.getElementById("guessing");
const TheGuess = document.getElementById("submtgus");
const Txt = document.getElementById("para");
const LimitPara = document.getElementById("limitpara");
const RandomPara = document.getElementById("randompara");


let minimimum, maximum, random, guess, attempts;



SetLimits.onclick = function () {
    attempts = 0;
    minimum = min.value;
    minimum = Number(minimum)
    maximum = max.value;
    maximum = Number(maximum);
    LimitPara.textContent = `Limits Are Set From ${minimum} to ${maximum}`
}
Generate.onclick = function () {
    random = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);

    RandomPara.textContent = "Random Value Is Generated !"
}

TheGuess.onclick = function () {
    guess = Guessing.value;
    guess = Number(guess);

    if (isNaN(guess)) {
        Txt.textContent = "Not A Number";
    }

    else if (guess > maximum || guess < minimum) {
        Txt.textContent = "Not in Vaild Limit";
    }
    else {
        attempts++
        if (guess > random) {
            Txt.textContent = "Too High !";
        }

        else if (guess < random) {
            Txt.textContent = "Too Low !";
        }
        else {
            Txt.textContent = `Right Guess It Took ${attempts} Attempts the Number is ${random}`;

        }
    }


}





