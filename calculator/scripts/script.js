const number_1 = document.getElementById('number_1');
const number_2 = document.getElementById('number_2');
const operation = document.getElementById('operation');
const result_div = document.getElementById('result_div');
const error_div = document.getElementById('error_div');
const submit = document.getElementById('submit');
const clear = document.getElementById('clear');

// console.log(number_1.value);
result_div.style.display = "none";
error_div.style.display = "none";
clear.style.display = "none";

submit.addEventListener('click', () => {
    if(!number_1.value || !number_2.value) {
        submit.style.display = "none";
        error_div.style.display = "block";
        clear.style.display = "block";
        document.getElementById('error_msg').innerText = "Please enter a valid numbers";
        return
    }
    switch (operation.value) {
        case '+':
            result_div.style.display = "block";
            clear.style.display = "block";
            submit.style.display = "none";
            document.getElementById('result').innerHTML = parseInt(number_1.value) + parseInt(number_2.value);
            break;
        case '-':
            result_div.style.display = "block";
            clear.style.display = "block";
            submit.style.display = "none";
            document.getElementById('result').innerHTML = parseInt(number_1.value) - parseInt(number_2.value);
            break;
        case '*':
            result_div.style.display = "block";
            clear.style.display = "block";
            submit.style.display = "none";
            document.getElementById('result').innerHTML = parseInt(number_1.value) * parseInt(number_2.value);
            break;
        case '/':
            result_div.style.display = "block";
            clear.style.display = "block";
            submit.style.display = "none";
            document.getElementById('result').innerHTML = parseInt(number_1.value) / parseInt(number_2.value);
            break;
        case '%':
            result_div.style.display = "block";
            clear.style.display = "block";
            submit.style.display = "none";
            document.getElementById('result').innerHTML = parseInt(number_1.value) % parseInt(number_2.value);
            break;
        default:
            break;
    }
});

clear.addEventListener('click', () => {
    result_div.style.display = "none";
    error_div.style.display = "none";
    clear.style.display = "none";
    submit.style.display = "block";
    number_1.value = '';
    number_2.value = '';
    operation.value = '+';
});