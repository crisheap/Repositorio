const infoDiv = document.getElementById("user-info");
const btnLogout = document.getElementById("btn-logout");
const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

if (loggedUser) {
    infoDiv.innerHTML = `<span>Bienvenido ${loggedUser.email} A Tu Banco Amigo</span>`;
} else {
    alert("Debes iniciar Sesión");
    window.location.href = "../PaginaPrincipal/index.html";
}

btnLogout.addEventListener("click", function () {
    localStorage.removeItem("loggedUser");
    window.location.href = "../paginaPrincipal/index.html";
});

function gen_table() {
    document.getElementById("tab").innerHTML = "";
    let n = Number(document.getElementById("capital").value);
    let n2 = Number(document.getElementById("cuota").value);
    let n3 = Number(document.getElementById("interes").value);

    if (n > 0) {
        for (i = 1; i <= n2; i++) {
            let ca = n / n2;
            let d1 = ca.toFixed(2);
            let i2 = ((n * n3) / 100) / n2;
            let d2 = i2.toFixed(2);
            let r = ca + i2;
            let d3 = r.toFixed(2);

            document.getElementById("tab").innerHTML += `
                <tr>
                    <td>${i}</td>
                    <td>${d1}</td>
                    <td>${d2}</td>
                    <td>${d3}</td>
                </tr>`;
        }

        let n1 = n.toFixed(2);
        let t_i = i2 * n2;
        let d4 = t_i.toFixed(2);
        let t_p = r * n2;
        let d5 = t_p.toFixed(2);

        document.getElementById("t1").innerHTML = n1;
        document.getElementById("t2").innerHTML = d4;
        document.getElementById("t3").innerHTML = d5;
    } else {
        alert("Falta ingresar un Número");
    }
}

const btnAtras = document.querySelector("#btn-atras");

btnAtras.addEventListener("click", function () {
  window.location.href = "../PaginaSegundaria/principal.html";
});