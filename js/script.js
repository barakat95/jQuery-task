let itemInput = document.getElementById('itemInput');
let addItemBtn = document.getElementById('addItemBtn');
let itemRow = document.getElementById('itemRow');
let itemList = [];

function addItem() {
    let item = {
        name: itemInput.value
    };
    itemList.push(item);
    displayItem();
    clearItemForm();
}
addItemBtn.addEventListener('click', () => {
    addItem();
})

function displayItem() {
    let cartoona = '';
    for (let i = 0; i < itemList.length; i++) {
        cartoona +=
            `
                    <li class="form-control text-left position-relative">
                        ${itemList[i].name}
                        <button class="btn btn-danger position-absolute" onclick="deleteItem(${i})">X</button>
                    </li>
                    `
    }
    itemRow.innerHTML = cartoona;
}

function deleteItem(index) {
    itemList.splice(index, 1);
    displayItem();
}

function clearItemForm() {
    itemInput.value = '';
}


//----------------- Section Two -----------------// 
let audio = document.getElementById('mySound');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$("#hustlin").mouseenter(function () {
    let x = setInterval(() => {
        $(".q2").css('background-color', getRandomColor);
    }, 500);
    audio.play();
    $("#hustlin").mouseleave(() => {
        clearInterval(x);
        $(".q2").css('background-color', 'transparent');
    })
});
$("#hustlin").mouseleave(function () {
    audio.pause();
});

// ----------------- Section 3 -------------------//
let day = document.getElementById('day');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

function displayTimer() {
    let fullDate = new Date();
    $('#day').text(fullDate.getDay());
    $('#hour').text(fullDate.getHours());
    $('#minute').text(fullDate.getMinutes());
    $('#second').text(fullDate.getSeconds());
}
setInterval(() => {
    displayTimer();
}, 1000);

// ------------------- Section 4 ---------------------//
let red = $('.red');
let green = $('.green');
let blue = $('.blue');

red.mouseenter(() => {
    $('.q4').css('background-color', '#ff0000');
})
red.mouseleave(() => {
    $('.q4').css('background-color', 'transparent');
})
green.mouseenter(() => {
    $('.q4').css('background-color', '#00ff00');
})
green.mouseleave(() => {
    $('.q4').css('background-color', 'transparent');
})
blue.mouseenter(() => {
    $('.q4').css('background-color', '#0000ff');
})
blue.mouseleave(() => {
    $('.q4').css('background-color', 'transparent');
})

// ------------- Section 5 ---------------- //
let username = document.getElementById('username');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let message = document.getElementById('message');
let usernameError = document.getElementById('usernameError');
let emailError = document.getElementById('emailError');
let phoneError = document.getElementById('phoneError');
let messageError = document.getElementById('messageError');
let submit = document.getElementById('submit');

submit.disabled = true;

function usernameValidation() {
    let regex = /^[A-Z].{5,40}$/;
    if (regex.test(username.value) == true) {
        username.classList.add('is-valid');
        username.classList.remove('is-invalid');
        usernameError.style.display = 'none';
    } else {
        username.classList.remove('is-valid');
        username.classList.add('is-invalid');
        usernameError.style.display = 'block';
    }
    addForm();
}
username.addEventListener('keyup', () => {
    usernameValidation();
});

function emailValidation() {
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (regex.test(email.value) == true) {
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
        emailError.style.display = 'none';
    } else {
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
        emailError.style.display = 'block';
    }
    addForm();
}
email.addEventListener('keyup', () => {
    emailValidation();
});

function phoneValidation() {
    let regex = /^(002)?01(0|1|2|5)[0-9]{8}$/;
    if (regex.test(phone.value) == true) {
        phone.classList.add('is-valid');
        phone.classList.remove('is-invalid');
        phoneError.style.display = 'none';
    } else {
        phone.classList.remove('is-valid');
        phone.classList.add('is-invalid');
        phoneError.style.display = 'block';
    }
    addForm();
}
phone.addEventListener('keyup', () => {
    phoneValidation();
});

function messageValidation() {
    let regex = /.{40,}/;
    if (regex.test(message.value) == true) {
        message.classList.add('is-valid');
        message.classList.remove('is-invalid');
        messageError.style.display = 'none';

    } else {
        message.classList.remove('is-valid');
        message.classList.add('is-invalid');
        messageError.style.display = 'block';
    }
    addForm()
}
message.addEventListener('keyup', () => {
    messageValidation();
    addForm();
});

function addForm() {
    if (username.value == '' || email.value == '' || phone.value == '' || message.value == '') {
        addItemBtn.disabled = true;
    } else if (username.value != '' || email.value != '' || phone.value != '' || message.value != '') {
        addItemBtn.disabled = false;
    }
}
