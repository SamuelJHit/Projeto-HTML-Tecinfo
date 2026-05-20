function entrar() {
    let login = document.getElementById("login");
    let senha = document.getElementById("senha");
    
    if (login.value == "" || senha.value == "") {
        alert ("Preencha usuario e senha!!")
    } else {
        alert ("Login realizado!")
        window.location.href = "pagina.html";
    }

    localStorage.setItem("login", login);
}