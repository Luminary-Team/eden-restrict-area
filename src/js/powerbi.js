const embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=ab455629-55b7-400e-90b7-8745d8b5c5c5&autoAuth=true&ctid=b148f14c-2397-402c-ab6a-1b4711177ac0'; // Substitua pela URL de incorporação do Power BI
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
