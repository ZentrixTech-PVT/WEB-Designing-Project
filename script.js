function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if(user === "admin" && pass === "1234") {
        localStorage.setItem("user", "SEHAJBIR SINGH");
        localStorage.setItem("role", "admin");

        document.getElementById("result").innerHTML = "Login Successful";

        setTimeout(function(){
            window.location.href = "executive-dashboard.html";
        }, 1000);
    } else {
        document.getElementById("result").innerHTML = "Wrong ID or Password";
    }
}

function exLogin() {
    var user = document.getElementById("ex_user").value;
    var pass = document.getElementById("ex_pass").value;

    if (user === "executive" && pass === "9999") {
        localStorage.setItem("user", "Executive User");
        localStorage.setItem("role", "executive");

        document.getElementById("ex_result").innerHTML = "Access Granted";

        setTimeout(function () {
            window.location.href = "executive-dashboard.html";
        }, 1000);

    } else {
        document.getElementById("ex_result").innerHTML = "Access Denied";
    }
}

function showUser() {
    var name = localStorage.getItem("user");
    if(name) {
        document.getElementById("welcome").innerHTML = "HI " + name + " WELCOME ";
    }
}

function logout() {
    localStorage.clear(); 
    window.location.href = "login.html";
}

function checkExecutive() {
    let role = localStorage.getItem("role");

    if (role !== "admin" && role !== "executive") {
        alert("Unauthorized Access!");
        window.location.href = "login.html";
    }
}