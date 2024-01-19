let suma = 0;
let input1 = document.querySelector('.box1 select');
let input2 = document.querySelector('.box2 select');
let input3 = document.querySelector('.box3 select');
let button = document.querySelector('button');
let h2 = document.querySelector('h2');
suma = Number(input1.value) + Number(input2.value) + Number(input3.value);
console.log(suma);


button.addEventListener('click',()=>{
    checkPassword();
})




function checkPassword() {
    console.log('Checking...');
    seleccion = input1.value + input2.value + input3.value;
    if (seleccion === '911') {
        h2.style.color = 'gold';
        h2.innerHTML = "Password 1 correcto";
    } else if (seleccion === '714'){
        h2.style.color = 'gold';
        h2.innerHTML = "Password 2 correcto";
    } else {
        h2.style.color = 'red';
        h2.innerHTML = "Password incorrecto";
    }
}
