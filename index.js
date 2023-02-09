const First_name = document.getElementById('fname');
const Last_name = document.getElementById('lname');
const Email = document.getElementById('email');
const Password = document.getElementById('pass');

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    let msg = [];

    if (First_name.value === '' || First_name.value == null) {
        msg.push('First Name is required');
    }
    if (Last_name.value === '' || Last_name.value == null) {
        msg.push('Last Name is required');
    }

    function ValidateEmail()
    {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
    alert("Valid email address!");
    document.form.text1.focus();
    return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    document.form.text1.focus();
    return false;
    }
    }
    
    if(Password.value === '' || Password.value == null) {
        msg.push('password is required');
    }
 localStorage.setItem('name', JSON.stringify(First_name.value));

localStorage.setItem('First_name', JSON.stringify(Last_name.value));

localStorage.setItem('email', JSON.stringify(Email.value));

  
localStorage.setItem('mobile', JSON.stringify(Password.value)); 
     

        if(msg.length > 0) {
            e.preventDefault()
            seterror.innerText = msg.join(', ')
}

})

