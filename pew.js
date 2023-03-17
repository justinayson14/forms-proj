const confirmPass = document.querySelector('#confirm-pass');

confirmPass.addEventListener('keyup', checkPassMatch);
confirmPass.addEventListener('focusin', checkPassMatch);

function checkPassMatch (e) {
    let pass = document.querySelector('#pass').value;
    let error = document.querySelector('#error-match');

    if(pass != confirmPass.value) {
        error.textContent = '*password does not match';
    }
    else {
        error.textContent = '';
    }
}
