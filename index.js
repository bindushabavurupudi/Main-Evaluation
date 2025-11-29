function loginfxn() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email === "admin@gmail.com" && password === "admin1234") {
        alert("Login Success");
        window.location.href = "admin.html";
    }
    else {
        alert("Wrong email or password");
    }
}