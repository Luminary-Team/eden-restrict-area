document.addEventListener("DOMContentLoaded", function () {
  const dashboard = document.getElementById("dashboard");
  const botaoDashboard = document.getElementById("botao-dashboard");
  const sair = document.getElementById("logout");
  const logo = document.getElementById("edenLogo");

  if (localStorage.getItem("showDashboard") === "true") {
    dashboard.style.display = "block";
    botaoDashboard.innerHTML = "Ocultar Gráficos";
  }

  logo.addEventListener("click", (e) => {
    e.preventDefault();
  });

  botaoDashboard.addEventListener(
    "click",
    (e) => {
      console.log("clicado " + e.target);
      const dashboardVisivel = dashboard.style.display === "block";

      if (dashboardVisivel) {
        dashboard.style.display = "none";
        botaoDashboard.innerHTML = "Mostrar Gráficos";
        localStorage.setItem("showDashboard", "false");
      } else {
        dashboard.style.display = "block";
        botaoDashboard.innerHTML = "Ocultar Gráficos";
        localStorage.setItem("showDashboard", "true");
      }
    },
    true
  );

  sair.addEventListener("click", function (e) {
    console.log("saindo " + e.target);
    localStorage.clear();
    window.location.reload();
  });
});
