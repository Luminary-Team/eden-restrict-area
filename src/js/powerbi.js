const embedUrl = 'https://app.powerbi.com/view?r=eyJrIjoiYjFiZTkxMzctMDI2Yy00NjgxLThjMGYtYjFiOWMyNTRiOWU1IiwidCI6ImIxNDhmMTRjLTIzOTctNDAyYy1hYjZhLTFiNDcxMTE3N2FjMCJ9';
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
