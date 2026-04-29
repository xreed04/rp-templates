/* === MACHINE À ÉCRIRE === */
(function(){
  var el = document.querySelector('.atai-mood');
  if (!el) return;
  var texte = el.getAttribute('data-mood') || el.textContent;
  el.textContent = '';
  el.setAttribute('data-mood', texte);
  var i = 0;
  function ecrire() {
    if (i < texte.length) {
      el.textContent += texte[i];
      i++;
      setTimeout(ecrire, 60);
    }
  }
  setTimeout(ecrire, 800);
})();

/* === BOUTON SIGNAL === */
(function(){
  var btn = document.querySelector('.atai-signal');
  if (!btn) return;
  btn.addEventListener('click', function(){
    var prenom = document.querySelector('.atai-name');
    var nom = prenom ? prenom.textContent.trim() : 'ce profil';
    var msg = "Salut ! Ton profil ATAI de " + nom + " m'a intéressé·e, tu voudrais qu'on se rencontre IC ?";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(msg).then(function(){
        btn.textContent = '✓ Message copié !';
        btn.classList.add('atai-signal-ok');
        setTimeout(function(){ btn.textContent = '💌 Envoyer un signal'; btn.classList.remove('atai-signal-ok'); }, 2500);
      });
    } else {
      var ta = document.createElement('textarea');
      ta.value = msg;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      btn.textContent = '✓ Message copié !';
      btn.classList.add('atai-signal-ok');
      setTimeout(function(){ btn.textContent = '💌 Envoyer un signal'; btn.classList.remove('atai-signal-ok'); }, 2500);
    }
  });
})();
