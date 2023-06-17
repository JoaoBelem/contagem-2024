import Countdown from "./modules/countdown.js";

const contador = document.getElementById('contador');

let atual = new Date();
const diasPara2024 = new Countdown('1 Jan 2024');

function contar(data){
  dias.innerText = data.total.days;
  horas.innerText = data.total.hours;
  minutos.innerText = data.total.minutes;
  segundos.innerText = data.total.seconds;
}

if (atual.getFullYear() == 2024) {
  const mensagem = document.createElement('p');
  mensagem.classList.add('mensagem');
  mensagem.innerText = 'Já é 2024!!!';

  contador.innerHTML = '';
  contador.appendChild(mensagem);

} else if (atual.getFullYear() > 2024) {
  const mensagem = document.createElement('p');
  mensagem.classList.add('mensagem');
  mensagem.innerText = '2024 já passou!';

  contador.innerHTML = '';
  contador.appendChild(mensagem);

}else {
  contar(diasPara2024);
  setInterval(() => contar(diasPara2024), 1000);
}
