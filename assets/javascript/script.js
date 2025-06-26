const abrirBtn = document.getElementById('abrir-barra');
const fecharBtn = document.getElementById('fechar-barra');
const menu = document.querySelector('.menu-navegacao');
const links = document.querySelectorAll('.menu-navegacao a');

abrirBtn.addEventListener('click', () => {
  menu.classList.add('ativo');
  abrirBtn.style.display = 'none';
  fecharBtn.style.display = 'inline';
});

fecharBtn.addEventListener('click', () => {
  menu.classList.remove('ativo');
  abrirBtn.style.display = 'inline';
  fecharBtn.style.display = 'none';
});

links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('ativo');
    abrirBtn.style.display = 'inline';
    fecharBtn.style.display = 'none';
  });
});
