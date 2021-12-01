document.querySelectorAll('form').forEach((form, index) => {
    form.addEventListener('submit', window[`f${index + 1}Func`]);
});


// function 1
function f1Func(e) {
    e.preventDefault();
    let inp1 = e.target[0];
    let result = e.target.parentNode.querySelector('span');
    if (inp1.value.replace(/ /g, '') !== '') {
        result.innerText = inp1.value;
        console.log(`Функция 1: ${inp1.value}`);
        inp1.value = '';
    }
}

// function 2
function f2Func(e) {
    e.preventDefault();
    let inp1 = e.target[0];
    let inp2 = e.target[1];
    let result = e.target.parentNode.querySelector('span');
    if (inp1.value !== '' && inp2.value !== '') {
        result.innerText = Number(inp1.value) + Number(inp2.value);
        console.log(`Функция 2: ${result.innerText}`);
        inp1.value = '';
        inp2.value = '';
    }
}

// function 3
function f3Func(e) {
    e.preventDefault();
    let inp1 = e.target[0];
    let result = e.target.parentNode.querySelector('span');
    if (inp1.value !== '') {
        result.innerText = Math.sqrt(inp1.value);
        console.log(`Функция 3: ${result.innerText}`);
        inp1.value = '';
    }
}

// function 4
function f4Func(e) {
    e.preventDefault();
    let inp1 = e.target[0];
    let result = e.target.parentNode.querySelector('span');
    if (inp1.value !== '') {
        result.innerText = inp1.value * 1.60934;
        console.log(`Функция 4: ${result.innerText}`);
        inp1.value = '';
    }
}

// function 5
function f5Func(e) {
    e.preventDefault();
    let inp1 = e.target[0];
    let inp2 = e.target[1];
    let result = e.target.parentNode.querySelector('span');
    if (inp1.value !== '' && inp2.value !== '') {
        result.innerText = Math.ceil(Math.random() * (inp2.value - inp1.value + 1) + inp1.value)
        console.log(`Функция 5: ${result.innerText}`);
        inp1.value = '';
        inp2.value = '';
    }
}

// function 6
function f6Func(e) {
    e.preventDefault();
    let inp1 = e.target[0];
    let result = e.target.parentNode.querySelector('span');
    if (inp1.value !== '') {
        if (inp1.value > 0)
            result.innerText = `Число ${inp1.value} является положительным`;
        else if (inp1.value < 0)
            result.innerText = `Число ${inp1.value} является отрицательным`;
        else
            result.innerText = `Число ${inp1.value} является нулем`;
        console.log(`Функция 6: ${result.innerText}`);
        inp1.value = '';
    }
}

// function 7
function f7Func(e) {
    e.preventDefault();
    let inp1 = e.target[0];
    let result = e.target.parentNode.querySelector('span');
    if (inp1.value !== '') {
        if (inp1.value % 2)
            result.innerText = `Число ${inp1.value} является нечетным`;
        else
            result.innerText = `Число ${inp1.value} является четным`;
        console.log(`Функция 7: ${result.innerText}`);
        inp1.value = '';
    }
}

// function 8
function f8Func(e) {
    e.preventDefault();
    let inp1 = e.target[0];
    let result = e.target.parentNode.querySelector('span');
    if (inp1.value !== '') {
        if (((inp1.value % 4 == 0) && (inp1.value % 100 != 0)) || (inp1.value % 400 == 0))
            result.innerText = `${inp1.value} год является високосным`;
        else
            result.innerText = `${inp1.value} год не является високосным`;
        console.log(`Функция 8: ${result.innerText}`);
        inp1.value = '';
    }
}

// function 9
function f9Func(e) {
    e.preventDefault();
    let inp1 = e.target[0];
    let inp2 = e.target[1];
    let inp3 = e.target[2];
    let result = e.target.parentNode.querySelector('span');
    if (inp1.value !== '' && inp2.value !== '' && inp3.value !== '') {
        result.innerText = Math.max(inp1.value, inp2.value, inp3.value)
        console.log(`Функция 9: ${result.innerText}`);
        inp1.value = '';
        inp2.value = '';
        inp3.value = '';
    }
}

// function 10
function f10Func(e) {
    e.preventDefault();
    let inp1 = e.target[0];
    let result = e.target.parentNode.querySelector('span');
    if (inp1.value !== '') {
        let isPrime = inp1.value > 1;
        for (let i = 2; i < inp1.value; i++) {
            if (inp1.value % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime)
            result.innerText = `Число ${inp1.value} является простым`;
        else
            result.innerText = `Число ${inp1.value} не является простым`;

        console.log(`Функция 10: ${result.innerText}`);
        inp1.value = '';
    }
}

// function 11
function f11Func(e) {
    e.preventDefault();
    let inp1 = e.target[0];
    let inp2 = e.target[1];
    let result = e.target.parentNode.querySelector('span');
    if (inp1.value !== '' && inp2.value !== '') {
        result.innerText = '';
        for (let i = parseInt(inp1.value); i <= parseInt(inp2.value); i++) {
            let check = false;

            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    check = true;
                    break;
                }
            }

            if (i > 1 && !check) {
                result.appendChild(document.createTextNode(`${i} `));
            }
        }
        console.log(`Функция 11: ${result.innerText}`);
        inp1.value = '';
        inp2.value = '';
    }
}

// function 12
function f12Func(e) {
    let table = [];
    e.preventDefault();
    let inp1 = e.target[0];
    let result = e.target.parentNode.querySelector('span');
    if (inp1.value !== '') {
        result.innerText = '';
        for (let i = 2; i < 10; i++) {
            result.innerHTML += `${inp1.value} x ${i} = ${inp1.value * i}<br>`;
            table.push({
                firstFactor: Number(inp1.value),
                secondFactor: i,
                product: inp1.value * i
            });
        }
        console.log('Функция 12:');
        console.table(table);
        inp1.value = '';
    }
}

// function 13
function f13Func(e) {
    e.preventDefault();
    let inp1 = e.target[0];
    let result = e.target.parentNode.querySelector('span');
    if (inp1.value.replace(/ /g, '') !== '') {
        if (inp1.value.toLowerCase() == inp1.value.toLowerCase().split("").reverse().join(""))
            result.innerText = `Строка "${inp1.value}" является палиндромом`;
        else
            result.innerText = `Строка "${inp1.value}" не является палиндромом`;
        console.log(`Функция 13: ${result.innerText}`);
        inp1.value = '';
    }
}

// function 14
function f14Func(e) {
    e.preventDefault();
    let inp1 = e.target[0];
    let result = e.target.parentNode.querySelector('span');
    if (inp1.value.replace(/ /g, '') !== '') {
        result.innerText = inp1.value.charAt(0).toUpperCase() + inp1.value.slice(1);
        console.log(`Функция 14: ${result.innerText}`);
        inp1.value = '';
    }
}