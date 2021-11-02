let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        button = e.target.innerText;
        console.log('Button text is ', button);
        if (button == 'X') {
            button = '*';
            screenValue += button;
            screen.value = screenValue;
        }
        else if (button == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (button == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += button;
            screen.value = screenValue;
        }

    })
}

