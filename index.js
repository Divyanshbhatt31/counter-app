const countValue = document.querySelector('#counter');
//const countValue = document.getElementById('counter');

//there are two ways of wrting the function initialising though...!

/*const increment = () => {
    let value = parseInt(countValue.innerText);
    value = value + 1;
    countValue.innerText = value;
};*/

function increment() {
    let value = parseInt(countValue.innerText);
    value = value + 1;
    countValue.innerText = value;
};

/*const decrement = () => {
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
};*/

function decrement() {
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
};