document.addEventListener("DOMContentLoaded", function () {
  const dashboard = document.getElementById("dashboard");
  const botaoDashboard = document.getElementById("botao-dashboard");
  const sair = document.getElementById("logout");
  const logo = document.getElementById("edenLogo");
  const aviso = document.getElementById("aviso");
  const conteudo = document.getElementById("conteudo");

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

  // mostra o dashboard se o storage estiver habilitado e salvo como "true"
  if (storageEnabled && localStorage.getItem("showDashboard") === "true") {
    dashboard.style.display = "block";
    botaoDashboard.innerHTML = "Ocultar Gráficos";
  }

  botaoDashboard.addEventListener("click", handleButtonClick);
  botaoDashboard.addEventListener("touchstart", (e) => {
    e.preventDefault();
    handleButtonClick(e);
  });

  // função para mostrar o dashboard ou ocultar
  function handleButtonClick(e) {
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
    if (storageEnabled) {
      localStorage.clear();
    }
    window.location.reload();
    window.location.href = "https://eden-landing-page.onrender.com/";
  });

  const paragrafoMobile = "Aqui nós temos um gráfico feito na plataforma PowerBI Desktop pelos integrantes de Dados do 2° ano para o admin poder ver tudo sobre as notícias das pessoas que participaram da feira. Nos mostrando a Média de Notas, Ocorrências por empresas, Notas por Empresas, etc.";
  const paragrafoDesktop = "Aqui nós temos um gráfico feito na plataforma PowerBI Desktop pelos integrantes de Dados do 2° ano para o admin poder ver tudo sobre os pessoas que aceitaram ou não serem usuários de nosso aplicativo. Mostrando as <strong>Formas de Descarte, Produtos Descartados, Contagem de Respostas por Dias as Cidades onde moram</strong>, etc.";

  function gerenciarParagrafos() {
    if (window.innerWidth <= 768) {
      conteudo.innerText = paragrafoMobile;
      aviso.style.display = "none";
    } else {
      conteudo.innerHTML = paragrafoDesktop;
      aviso.style.display = "block";
    }
  }

  gerenciarParagrafos();
  window.addEventListener("resize", gerenciarParagrafos);
});
