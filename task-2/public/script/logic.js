const randomNumber = Math.floor(Math.random() * 100) + 1;
let counter = 0;
let i = 1;
function checkNumber() {
    const userInput = document.querySelector("input").value;
    if (i < 5) {
        check(userInput);
        i++;
    } else {
        check(userInput);
        document.getElementById('submit').disabled = true;
        new Audio('/sounds/wrong.mp3').play();
        document.querySelector('.title').innerText = 'Game Over!';
        document.getElementById('refresh-btn').removeAttribute('hidden');
    }
}
function check(userInput) {
    if (userInput > randomNumber) {
        document.getElementById('status').innerText = `Number entered is bigger than the mystery number!`;
        document.getElementById('box').animate(
            [
                {
                    backgroundColor: 'red'
                },
            ],
            {
                duration: 100,
                iterations: 2
            }
        );
        new Audio('/sounds/wrong.mp3').play();
        counter++;
    } else if (userInput < randomNumber) {
        document.getElementById('status').innerText = `Number entered is lesser than the mystery number!`;
        document.getElementById('box').animate(
            [
                {
                    backgroundColor: 'red'
                },
            ],
            {
                duration: 100,
                iterations: 2
            }
        );
        new Audio('/sounds/wrong.mp3').play();
        counter++;
    } else {
        if(counter === 0) {
            document.querySelector('.title').innerText = 'You read minds! Amazing!';
        } else if(counter === 1) {
            document.querySelector('.title').innerText = `Bull's eye! You've guessed it correctly after 1 guess!`;
        } else {
            document.querySelector('.title').innerText = `Bull's eye! You've guessed it correctly after ${counter} guess!`;
        }
        document.getElementById('number').innerText = randomNumber.toString();
        document.getElementById('box').style.backgroundColor = 'green';
        document.getElementById('status').innerText = '';
        new Audio('/sounds/correct.mp3').play();
        document.getElementById('submit').disabled = true;
        document.getElementById('refresh-btn').removeAttribute('hidden');
    }
}
function reloadPage() {
    document.location.reload();
}