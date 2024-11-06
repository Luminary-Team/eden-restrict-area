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

  // função para mostrar o dashboard ou ocultar
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

  // o evento de clique do atalho
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.altKey && e.key === "u") {
      handleButtonClick(e);
    }
  });

  sair.addEventListener("click", function (e) {
    console.log("saindo " + e.target);
    if (storageEnabled) {
      localStorage.clear();
    }
    window.location.reload();
  });

  // função para trocar de paragrafo quando for mobile
  function inserirParagrafo() {
    const paragrafo = document.createElement("p");
    paragrafo.textContent =
      "Aqui nós temos um gráfico feito na plataforma PowerBI Desktop pelos integrantes de Dados do 2° ano para o admin poder ver tudo sobre as notícias das pessoas que participaram da feira. Nos mostrando a <strong>Média de Notas, Ocorrências por empresas, Notas por Empresas</strong>, etc.";

    if (window.innerWidth <= 768 && document.getElementById("paragrafo-dinamico")) {
      paragrafo.id = "paragrafo-dinamico";
      dashboard.appendChild(paragrafo);
    } else if (window.innerWidth > 768 && document.getElementById("paragrafo-dinamico")) {
      document.getElementById("paragrafo-dinamico").remove();
    }
  }

  inserirParagrafo();
  window.addEventListener("resize", inserirParagrafo);
});
