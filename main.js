if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('/sw.js')
    .then((reg)=>{
      console.log('Registrado nosso primeiro service worker', req);
    }).catch((err)=>{
      console.log('Algo de errado aconteceu', err);
    })
  })
}

letmyPrompt;
const pwaAlert = document.querySelector('.pwa__alert');
const btnPwa = document.querySelector('.pwa__alert__btn');


window.addEventListener('beforeinstallprompt', (e)=>{
  e.preventDefault();
  console.log('Pronto para instalar', e);
  myPrompt = e;

  pwaAlert.style.display = 'block';
});

btnPwa.addEventListener('click', () => {
  pwaAlert.style.display = 'none';
  myPrompt.prompt();
});