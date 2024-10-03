const embedUrl = 'https://app.powerbi.com/view?r=YOUR_EMBED_URL_HERE'; // Substitua pela URL de incorporação do Power BI
const powerbiContainer = document.getElementById('powerbi-container');

function loadPowerBI() {
    const iframe = document.createElement('iframe');
    iframe.src = embedUrl;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = '0';

    powerbiContainer.appendChild(iframe);
}

document.addEventListener('DOMContentLoaded', loadPowerBI);
