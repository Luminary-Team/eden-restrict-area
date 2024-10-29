document.addEventListener("DOMContentLoaded", function () {
  const dashboard = document.getElementById("dashboard");
  const botaoDashboard = document.getElementById("botao-dashboard");
  const sair = document.getElementById("logout");
  const logo = document.getElementById("edenLogo");

  // verifica para a web view se o storage está disponível
  const isLocalStorageAvailable = () => {
    try {
      localStorage.setItem("test", "test");
      localStorage.removeItem("test");
      return true;
    } catch (error) {
      console.warn("localStorage não está disponível neste ambiente.");
      return false;
    }
  };

  // o estado da web view
  const storageEnabled = isLocalStorageAvailable();

  // mostra o dashboard
  if (storageEnabled && localStorage.getItem("showDashboard") === "true") {
    dashboard.style.display = "block";
    botaoDashboard.innerHTML = "Ocultar Gráficos";
  }

  logo.addEventListener("click", (e) => {
    e.preventDefault();
  });

  botaoDashboard.addEventListener("click", handleButtonClick);
  botaoDashboard.addEventListener("touchstart", (e) => {
    e.preventDefault();
    handleButtonClick(e);
  });

  function handleButtonClick(e) {
    console.log("clicado " + e.target);
    const dashboardVisivel = dashboard.style.display === "block";

    if (dashboardVisivel) {
      dashboard.style.display = "none";
      botaoDashboard.innerHTML = "Mostrar Gráficos";
      if (storageEnabled) {
        localStorage.setItem("showDashboard", "false");
      }
    } else {
      dashboard.style.display = "block";
      botaoDashboard.innerHTML = "Ocultar Gráficos";
      if (storageEnabled) {
        localStorage.setItem("showDashboard", "true");
      }
    }
  }

  sair.addEventListener("click", function (e) {
    console.log("saindo " + e.target);
    if (storageEnabled) {
      localStorage.clear();
    }
    window.location.reload();
  });
});
