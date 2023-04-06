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

    dianoite = new Array('Madrugada', 'Manhã', 'Tarde', 'Noite');

    if (horas >= 0) {
        esta.innerHTML = `Está de ${dianoite[0]}`;
        html.classList.add('madrugada');
    }

    if (horas >= 6) {
        esta.innerHTML = `Está de ${dianoite[1]}`
        html.classList.add('manha');
    }

    if (horas >= 13) {
        esta.innerHTML = `Está de ${dianoite[2]}`
        html.classList.add('tarde');
    }

    if (horas >= 18) {
        esta.innerHTML = `Está de ${dianoite[3]}`
        html.classList.add('noite');
    }

    elementoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`
}
setInterval(relogio, 1000);
