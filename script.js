let userName = document.querySelector('#username');
let btnName = document.querySelector('#btn-name');
let rules = document.querySelector('#rules');
let dislayUsername = document.querySelector('#rules-username');


btnName.addEventListener("click", function displayRules() {
    console.log(userName.value);
    if (userName.value === '') {
        alert('Please, Enter some text!')
    } else {
        dislayUsername.innerText = userName.value;
        console.log(dislayUsername.value);
        rules.style.display = "block";
    }
})