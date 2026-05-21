function entrar() {
    let login = document.getElementById("login");
    let senha = document.getElementById("senha");
    
    if (login.value == "" || senha.value == "") {
        alert ("Preencha usuario e senha!!")
    } else {
        localStorage.setItem("login", login.value);

        alert ("Login realizado!")
        window.location.href = "pagina.html";
    }

}

function dashboard() {
    let login = document.getElementById("login");

    if (login == ""){
        console.log("Desconhecido entrando")
    } else {
        localStorage.setItem("login", login);

        console.log("Usuario entrando")
        window.location.href = "dashboard.html";
    }
}