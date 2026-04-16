<<<<<<< HEAD
/* Javascript för att logga in under konstruktion */
=======
>>>>>>> 4f16e2a37f2148b404c26432b1f641f25f1466c0
document.getElementById("loginForm").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

if ( !username || !password ) {
    alert("Please fill in all fields.");
    return;
}
});

localStorage.setItem("username", username);
localStorage.setItem("password", password);

window.location.href = "dashboard.html";