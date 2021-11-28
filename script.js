// function 1
const f1Input = document.querySelector('#f1 input[type="text"]');
const f1Form = document.querySelector('#f1 form');
const f1Result = document.querySelector('#f1 span');

f1Form.addEventListener('submit', f1Func);

function f1Func(e) {
    e.preventDefault();
    if (f1Input.value.replace(/ /g, '') !== '') {
        f1Result.innerText = f1Input.value;
        console.log(`Функция 1: ${f1Input.value}`);
        f1Input.value = '';
    }
}

// function 2
const f2Input1 = document.querySelector('#f2 .num1');
const f2Input2 = document.querySelector('#f2 .num2');
const f2Form = document.querySelector('#f2 form');
const f2Result = document.querySelector('#f2 span');

f2Form.addEventListener('submit', f2Func);

function f2Func(e) {
    e.preventDefault();
    if (f2Input1.value !== '' && f2Input2.value !== '') {
        f2Result.innerText = Number(f2Input1.value) + Number(f2Input2.value);
        console.log(`Функция 2: ${f2Result.innerText}`);
        f2Input1.value = '';
        f2Input2.value = '';
    }
}

// function 3
const f3Input = document.querySelector('#f3 input[type="number"]');
const f3Form = document.querySelector('#f3 form');
const f3Result = document.querySelector('#f3 span');

f3Form.addEventListener('submit', f3Func);

function f3Func(e) {
    e.preventDefault();
    if (f3Input.value !== '') {
        f3Result.innerText = Math.sqrt(f3Input.value);
        console.log(`Функция 3: ${f3Result.innerText}`);
        f3Input.value = '';
    }
}

// function 4
const f4Input = document.querySelector('#f4 input[type="number"]');
const f4Form = document.querySelector('#f4 form');
const f4Result = document.querySelector('#f4 span');

f4Form.addEventListener('submit', f4Func);

function f4Func(e) {
    e.preventDefault();
    if (f4Input.value !== '') {
        f4Result.innerText = f4Input.value * 1.60934;
        console.log(`Функция 4: ${f4Result.innerText}`);
        f4Input.value = '';
    }
}

// function 5
const f5Input1 = document.querySelector('#f5 .num1');
const f5Input2 = document.querySelector('#f5 .num2');
const f5Form = document.querySelector('#f5 form');
const f5Result = document.querySelector('#f5 span');

f5Form.addEventListener('submit', f5Func);

function f5Func(e) {
    e.preventDefault();
    if (f5Input1.value !== '' && f5Input2.value !== '') {
        f5Result.innerText = Math.floor(Math.random() * (f5Input2.value - f5Input1.value + 1) + f5Input1.value)
        console.log(`Функция 5: ${f5Result.innerText}`);
        f5Input1.value = '';
        f5Input2.value = '';
    }
}

// function 6
const f6Input = document.querySelector('#f6 input[type="number"]');
const f6Form = document.querySelector('#f6 form');
const f6Result = document.querySelector('#f6 span');

f6Form.addEventListener('submit', f6Func);

function f6Func(e) {
    e.preventDefault();
    if (f6Input.value !== '') {
        if (f6Input.value > 0)
            f6Result.innerText = `Число ${f6Input.value} является положительным`;
        else if (f6Input.value < 0)
            f6Result.innerText = `Число ${f6Input.value} является отрицательным`;
        else
            f6Result.innerText = `Число ${f6Input.value} является нулем`;
        console.log(`Функция 6: ${f6Result.innerText}`);
        f6Input.value = '';
    }
}

// function 7
const f7Input = document.querySelector('#f7 input[type="number"]');
const f7Form = document.querySelector('#f7 form');
const f7Result = document.querySelector('#f7 span');

f7Form.addEventListener('submit', f7Func);

function f7Func(e) {
    e.preventDefault();
    if (f7Input.value !== '') {
        if (f7Input.value % 2)
            f7Result.innerText = `Число ${f7Input.value} является нечетным`;
        else
            f7Result.innerText = `Число ${f7Input.value} является четным`;
        console.log(`Функция 7: ${f7Result.innerText}`);
        f7Input.value = '';
    }
}

// function 8
const f8Input = document.querySelector('#f8 input[type="number"]');
const f8Form = document.querySelector('#f8 form');
const f8Result = document.querySelector('#f8 span');

f8Form.addEventListener('submit', f8Func);

function f8Func(e) {
    e.preventDefault();

    if (f8Input.value !== '') {
        if (((f8Input.value % 4 == 0) && (f8Input.value % 100 != 0)) || (f8Input.value % 400 == 0))
            f8Result.innerText = `${f8Input.value} год является високосным`;
        else
            f8Result.innerText = `${f8Input.value} год не является високосным`;
        console.log(`Функция 8: ${f8Result.innerText}`);
        f8Input.value = '';
    }
}

// function 9
const f9Input1 = document.querySelector('#f9 .num1');
const f9Input2 = document.querySelector('#f9 .num2');
const f9Input3 = document.querySelector('#f9 .num3');
const f9Form = document.querySelector('#f9 form');
const f9Result = document.querySelector('#f9 span');

f9Form.addEventListener('submit', f9Func);

function f9Func(e) {
    e.preventDefault();
    if (f9Input1.value !== '' && f9Input2.value !== '') {
        f9Result.innerText = Math.max(f9Input1.value, f9Input2.value, f9Input3.value)
        console.log(`Функция 9: ${f9Result.innerText}`);
        f9Input1.value = '';
        f9Input2.value = '';
        f9Input3.value = '';
    }
}

// function 10
const f10Input = document.querySelector('#f10 input[type="number"]');
const f10Form = document.querySelector('#f10 form');
const f10Result = document.querySelector('#f10 span');

f10Form.addEventListener('submit', f10Func);

function f10Func(e) {
    e.preventDefault();
    if (f10Input.value !== '') {
        let isPrime = f10Input.value > 1;
        for (let i = 2; i < f10Input.value; i++) {
            if (f10Input.value % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime)
            f10Result.innerText = `Число ${f10Input.value} является простым`;
        else
            f10Result.innerText = `Число ${f10Input.value} не является простым`;

        console.log(`Функция 10: ${f10Result.innerText}`);
        f10Input.value = '';
    }
}

// function 11
const f11Input1 = document.querySelector('#f11 .num1');
const f11Input2 = document.querySelector('#f11 .num2');
const f11Form = document.querySelector('#f11 form');
const f11Result = document.querySelector('#f11 span');

f11Form.addEventListener('submit', f11Func);

function f11Func(e) {
    e.preventDefault();
    if (f11Input1.value !== '' && f11Input2.value !== '') {
        f11Result.innerText = '';
        for (let i = parseInt(f11Input1.value); i <= parseInt(f11Input2.value); i++) {
            let check = false;
        
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    check = true;
                    break;
                }
            }

            if (i > 1 && !check) {
                f11Result.appendChild(document.createTextNode(`${i} `));
            }
        }
        console.log(`Функция 11: ${f11Result.innerText}`);
        f11Input1.value = '';
        f11Input2.value = '';
    }
}

// function 12
const f12Input = document.querySelector('#f12 input[type="number"]');
const f12Form = document.querySelector('#f12 form');
const f12Result = document.querySelector('#f12 span');

f12Form.addEventListener('submit', f12Func);

function f12Func(e) {
    let table = [];
    e.preventDefault();
    if (f12Input.value !== '') {
        f12Result.innerText = '';
        for(let i = 2; i < 10; i++){
            f12Result.innerHTML += `${f12Input.value} x ${i} = ${f12Input.value * i}<br>`;
            table.push({firstFactor:Number(f12Input.value), secondFactor: i, product: f12Input.value * i});
        }
        console.log('Функция 12:');
        console.table(table);
        f12Input.value = '';
    }
}

// function 13
const f13Input = document.querySelector('#f13 input[type="text"]');
const f13Form = document.querySelector('#f13 form');
const f13Result = document.querySelector('#f13 span');

f13Form.addEventListener('submit', f13Func);

function f13Func(e) {
    e.preventDefault();
    if (f13Input.value.replace(/ /g, '') !== '') {
        if (f13Input.value.toLowerCase() == f13Input.value.toLowerCase().split("").reverse().join(""))
            f13Result.innerText = `Строка "${f13Input.value}" является палиндромом`;
        else
            f13Result.innerText = `Строка "${f13Input.value}" не является палиндромом`;
        console.log(`Функция 13: ${f13Result.innerText}`);
        f13Input.value = '';
    }
}

// function 14
const f14Input = document.querySelector('#f14 input[type="text"]');
const f14Form = document.querySelector('#f14 form');
const f14Result = document.querySelector('#f14 span');

f14Form.addEventListener('submit', f14Func);

function f14Func(e) {
    e.preventDefault();
    if (f14Input.value.replace(/ /g, '') !== '') {
        f14Result.innerText = f14Input.value.charAt(0).toUpperCase() + f14Input.value.slice(1);
        console.log(`Функция 14: ${f14Result.innerText}`);
        f14Input.value = '';
    }
}