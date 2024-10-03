document.addEventListener("DOMContentLoaded", function () {
  const dashboard = document.getElementById("dashboard");
  const botaoDashboard = document.getElementById("botao-dashboard");
  const sair = document.getElementById("logout");

  if (localStorage.getItem("showDashboard") === "true") {
    dashboard.style.display = "block";
    botaoDashboard.innerHTML = "Ocultar Gráficos";
  }

  botaoDashboard.addEventListener(
    "click",
    function (e) {
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
