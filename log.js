const Iemail = document.getElementById('email');
const Ipassword = document.getElementById('pass');
const Form = document.getElementById('form');
const Error = document.getElementById('seterror');

form.addEventListener('submit', (e) => {
    let msg = [];

    if(email.value === '' || email.value == null) {
        msg.push('Email is required');

}
if(pass.value === '' || pass.value == null) {
    msg.push('Password is required');
}
localStorage.setItem('email', JSON.stringify(email.value));
localStorage.setItem('pass', JSON.stringify(pass.value));

if(msg.length > 0) {
    e.preventDefault()
    seterror.innerText = msg.join(', ')


}})