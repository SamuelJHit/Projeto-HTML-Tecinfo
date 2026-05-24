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

document.addEventListener("DOMContentLoaded", () => {
    const btnStatus = document.getElementById("btnStatus");

    const painel = document.getElementById("statusDropdown")

    /* Ao abrir */

    btnStatus.addEventListener("click", (event) => {

        event.stopPropagation();

        painel.classList.toggle("ativo");
    });

    /* Ao fechar */

    document.addEventListener("click", () => {

        painel.classList.remove("ativo");
    });

    /* ao impedir fechar ao clicar dentro */

    painel.addEventListener("click", () => {

        event.stopPropagation();
    });

});


/* Painel Feed */

document.addEventListener("DOMContentLoaded", () => {

    const btnFeed =
        document.getElementById("btnFeed");

    const painelFeed =
        document.getElementById("feedDropdown");

    /* ABRIR FECHAR */

    btnFeed.addEventListener("click", (event) => {

        event.stopPropagation();

        painelFeed.classList.toggle("ativo");
    });

    /* FECHAR AO CLICAR FORA */

    document.addEventListener("click", () => {

        painelFeed.classList.remove("ativo");
    });

    /* IMPEDIR FECHAR AO CLICAR DENTRO */

    painelFeed.addEventListener("click", (event) => {

        event.stopPropagation();
    });

});