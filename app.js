

function getPin() {

    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }


}


function generatePin() {

    // const random = Math.random() * 10000;
    // const pin = (random + " ").split('.')[0];
    // (random + " ") = string . split('.') = array

    const random = Math.round(Math.random() * 10000)
    return random
}


function getInputValue(id) {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;

    return inputValue;
}
function setInputValue(id, inputValue) {
    const inputField = document.getElementById(id);
    inputField.value = inputValue;
}
function setElementValue(id, elementValue) {
    const elementField = document.getElementById(id);
    elementField.innerText = elementValue;
}

document.getElementById("generate-btn").addEventListener("click", function () {
    
    const pin = getPin();
    setInputValue('display-pin', pin);


    document.getElementById('typed-number').focus();
    document.getElementById('display-pin').readOnly = true;
    document.getElementById('typed-number').readOnly = true;

    document.getElementById('attempt').innerText = 3 + "try left";
    attempt = 3;

    // setElementValue('pin-match', '');
    // setElementValue('pin-notMatch', '');
    
})

document.getElementById('calculator').addEventListener('click', function (event) {

    const number = event.target.innerText;

    const typedNumberField = document.getElementById('typed-number');
    let previousTypedNumber = typedNumberField.value;

    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            // let digits = previousTypedNumber.slice(0, -1);

            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    } else {

        const newTypedNumber = previousTypedNumber + number;
        setInputValue('typed-number', newTypedNumber);

    }

})


let attempt = 3;

document.getElementById('verify-pin').addEventListener('click', function () {

    const displayPin = getInputValue('display-pin');
    const typedPin = getInputValue('typed-number');

    const pinSuccessMsg = document.getElementById('pin-match');
    const pinFailureMsg = document.getElementById('pin-notMatch');

    if (displayPin === '' || typedPin === '') {
        if (displayPin === '' && typedPin === '') {
            alert("Please Generate your pain, then Try again")
        }
        else if (displayPin === '') {
            alert("please generate your pain")
        }
        else if (typedPin === '') {
            alert('please enter your pain')
        }

    }

    else if (displayPin === typedPin) {
        pinSuccessMsg.style.display = 'block';
        pinFailureMsg.style.display = 'none';

        setInputValue('display-pin', '');
        setInputValue('typed-number', '');
        document.getElementById('attempt').innerText = '';
    }

    else {
        pinFailureMsg.style.display = 'block';
        pinSuccessMsg.style.display = 'none';
        // setInputValue('typed-number', '');

        attempt = attempt - 1;;
        console.log(attempt)
        if (attempt < 1) {
            document.getElementById('attempt').innerText = 'Sorry!! Your Chance is Over';

            setInputValue('display-pin', '');
            setInputValue('typed-number', '');

        }
        else {
            document.getElementById('attempt').innerText = attempt + 'try left'
        }

    }

})