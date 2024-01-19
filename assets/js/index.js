let suma = 0;
let input1 = document.querySelector('.box1 input');
let input2 = document.querySelector('.box2 input');
let input3 = document.querySelector('.box3 input');
let h3 = document.querySelector('h3');
suma = Number(input1.value) + Number(input2.value) + Number(input3.value);
console.log(suma);

input1.addEventListener('change', () => {
    checkSuma();
});
input2.addEventListener('change', () => {
    checkSuma();
});
input3.addEventListener('change', () => {
    checkSuma();
});

function checkSuma() {
    console.log('Checking...');
    suma = Number(input1.value) + Number(input2.value) + Number(input3.value);
    if (suma <= 10) {
        h3.style.color = 'green';
        h3.innerHTML = "Llevas : " + suma + "Stickers";
    } else {
        h3.style.color = 'red';
        h3.innerHTML = "Llevas demasiados Stickers";
    }
}
