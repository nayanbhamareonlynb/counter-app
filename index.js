
const mainTitle = document.getElementById('titlee');
let curValue = 0;
const btndecrease = document.querySelector('#decrease');
const btnreset = document.querySelector('#reset');
const btnincrease = document.querySelector('#increase');

btnincrease.addEventListener('click', () => {
    curValue++;
    mainTitle.textContent = curValue;
});

btndecrease.addEventListener('click', () => {

    curValue--;
    if(curValue<0){
        curValue = 0;
    }
    mainTitle.textContent = curValue;
});
btnreset.addEventListener('click', () => {
    curValue = 0;
    mainTitle.textContent = curValue;
});

