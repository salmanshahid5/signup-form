document.getElementById('signupform').addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#Password").value;
    const confirmPassword = document.querySelector("#ConfirmPassword").value;

    //All  fields check
    if(!username || !password ||!confirmPassword){
        alert('All Fields Are Required');
        return;
    };

    // password length check
    if(password.length < 8){
        alert('Password must be eight character');
        return;
    }

    // password or ConfirmPassword should be some
    if(password !== confirmPassword){
        alert('Passwords do not match.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({
        username,
        password,
    });

    localStorage.setItem('users',JSON.stringify(users));

    alert('User signed up successfully.');

    setInterval(() => {
        window.location.href = "login.html"
    }, 1000);
})