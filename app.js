'use strict';

const display = document.getElementById('display');

const buttons = document.querySelectorAll('button');

buttons.forEach(function (button) {

    button.addEventListener('click', calculate);

});


function calculate(event) {
    const clickedButtonValue = event.target.value;

    switch (clickedButtonValue) {
        case 'clr':
            display.value = '';
            break;
        case'del':
            display.value = display.value.slice(0, display.value.length - 1);
            break;
        case '=':
            if (display.value.includes('/0')){
               window.alert("Error, cannot divide by 0");
               display.value = '';
            }
            if (display.value !== ''){
                display.value = eval(display.value);
            }
            break;
        default:
            display.value += clickedButtonValue;


    }

}

