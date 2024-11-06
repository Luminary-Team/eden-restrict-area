let urlDesktop =
  "https://app.powerbi.com/view?r=eyJrIjoiNzkzZjg0NjMtZmE0YS00MzZiLTgyYWQtMGZlOTEyYjI3MzhlIiwidCI6ImIxNDhmMTRjLTIzOTctNDAyYy1hYjZhLTFiNDcxMTE3N2FjMCJ9";

const urlMobile =
  "https://app.powerbi.com/view?r=eyJrIjoiZmE5OWFlOWUtNzUyZS00ZTAyLWFmM2MtNmQwODhlYzViZDUwIiwidCI6ImIxNDhmMTRjLTIzOTctNDAyYy1hYjZhLTFiNDcxMTE3N2FjMCJ9";

const powerbiContainer = document.getElementById("powerbi-container");

function loadPowerBI() {
  if (window.innerWidth <= 768) {
    urlDesktop = urlMobile;
  }

  const iframe = document.createElement("iframe");
  iframe.src = urlDesktop;
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.frameBorder = "0";

  powerbiContainer.appendChild(iframe);
}

document.addEventListener("DOMContentLoaded", loadPowerBI);

window.addEventListener("resize", () => {
  powerbiContainer.innerHTML = "";
  loadPowerBI();
});
