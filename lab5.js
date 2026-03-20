document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let birthday = document.getElementById("birthday").value;
    let user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        birthday: birthday
    };
    let valid = true;
    if (firstName === "" || lastName === "" || email === "" || password === "" || birthday === "") {
        valid = false;
    }
    if (!(password.includes("!") || password.includes("?"))) {
        valid = false;
    }
    let hiddenPassword = "*".repeat(password.length);
    if (valid) {
        document.getElementById("result").innerHTML =
            "Registration Successful!<br>" +
            "First Name: " + user.firstName + "<br>" +
            "Last Name: " + user.lastName + "<br>" +
            "Email: " + user.email + "<br>" +
            "Password: " + hiddenPassword + "<br>" +
            "Date of Birth: " + user.birthday;
    } else {
        document.getElementById("result").innerHTML =
            "Registration Failed<br>" +
            "First Name: " + user.firstName + "<br>" +
            "Last Name: " + user.lastName + "<br>" +
            "Email: " + user.email + "<br>" +
            "Password: " + hiddenPassword + "<br>" +
            "Date of Birth: " + user.birthday;
    }
}
);