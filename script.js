function relogio() {
    const html = document.querySelector('html');
    const elementoRelogio = document.querySelector(".relogio");
    const horaAtual = new Date();

    const horas = horaAtual.getHours();
    const minutos = horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds();

    const formatoHoras = horas.toString().padStart(2, "0");
    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");

    const frase = document.querySelector(".frase");
    dia = new Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado');

    mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Stembro', 'Outubro', 'Novembro', 'Dezembro');

    hoje = new Date;

    frase.innerHTML = `${dia[hoje.getDay()]} , ${hoje.getDate().toString().padStart(2, "0")} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()} `

    const esta = document.querySelector(".esta")

    dianoite = new Array('Hora de Dormir', 'Bom Dia', 'Boa Tarde', 'Boa Noite');

    if (horas >= 0) {
        esta.innerHTML = `${dianoite[0]}`;
        html.classList.add('madrugada');
        document.getElementById("dor").style.display="inline";
    }

    if (horas >= 6) {
        esta.innerHTML = `${dianoite[1]}`
        html.classList.add('manha');
        document.getElementById("dor").style.display="none";
        document.getElementById("man").style.display="inline";
    }

    if (horas >= 13) {
        esta.innerHTML = `${dianoite[2]}`
        html.classList.add('tarde');
        document.getElementById("man").style.display="none";
        document.getElementById("tar").style.display="inline"
    }

    if (horas >= 18) {
        esta.innerHTML = `${dianoite[3]}`
        html.classList.add('noite');
        document.getElementById("tar").style.display="none";
        document.getElementById("noi").style.display="inline"
    }

    elementoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`
}
setInterval(relogio, 1000);
