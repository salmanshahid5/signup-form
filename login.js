document.getElementById('signupform')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.querySelector("#username").value;
        const password = document.querySelector("#Password").value;

        //All  fields check
        if (!username || !password) {
            alert('All Fields Are Required');
            return;
        };

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(u=>u.username == username && u.password == password);
        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            alert('Login successful!');

            setInterval(() => {
                window.location.href = "home.html"
            }, 1000);
        }
        else {
            alert('Invalid username or password');
        }
    })