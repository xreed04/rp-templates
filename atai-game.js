(function(){
  var infos = document.querySelector('.atai-perso-infos');
  if (!infos) return;

  var KEY_LIKE = 'atai_like_' + window.location.pathname;
  var KEY_FIRE = 'atai_fire_' + window.location.pathname;
  var KEY_PASS = 'atai_pass_' + window.location.pathname;

  var likes  = parseInt(localStorage.getItem(KEY_LIKE) || '0');
  var fires  = parseInt(localStorage.getItem(KEY_FIRE) || '0');
  var passes = parseInt(localStorage.getItem(KEY_PASS) || '0');

  var zone = document.createElement('div');
  zone.style.cssText = 'margin-top:10px;display:flex;justify-content:center;align-items:center;gap:12px;';

  zone.innerHTML =
    '<div style="text-align:center;">' +
      '<button id="atai-btn-pass" style="width:40px;height:40px;border-radius:50%;border:2px solid rgba(255,255,255,0.4);background:rgba(255,255,255,0.15);font-size:18px;cursor:pointer;display:block;margin:0 auto;">👎</button>' +
      '<span id="atai-score-pass" style="font-size:10px;color:rgba(255,255,255,0.8);margin-top:3px;display:block;">0</span>' +
    '</div>' +
    '<div style="text-align:center;">' +
      '<button id="atai-btn-like" style="width:40px;height:40px;border-radius:50%;border:2px solid rgba(255,255,255,0.4);background:rgba(255,255,255,0.15);font-size:18px;cursor:pointer;display:block;margin:0 auto;">💖</button>' +
      '<span id="atai-score-like" style="font-size:10px;color:rgba(255,255,255,0.8);margin-top:3px;display:block;">0</span>' +
    '</div>' +
    '<div style="text-align:center;">' +
      '<button id="atai-btn-fire" style="width:40px;height:40px;border-radius:50%;border:2px solid rgba(255,255,255,0.4);background:rgba(255,255,255,0.15);font-size:18px;cursor:pointer;display:block;margin:0 auto;">🔥</button>' +
      '<span id="atai-score-fire" style="font-size:10px;color:rgba(255,255,255,0.8);margin-top:3px;display:block;">0</span>' +
    '</div>';

  infos.appendChild(zone);

  function update() {
    document.getElementById('atai-score-like').textContent = likes;
    document.getElementById('atai-score-fire').textContent = fires;
    document.getElementById('atai-score-pass').textContent = passes;
  }
  update();

  function anime(btn) {
    btn.style.transform = 'scale(1.35)';
    btn.style.background = 'rgba(255,255,255,0.35)';
    setTimeout(function(){ btn.style.transform = 'scale(1)'; btn.style.background = 'rgba(255,255,255,0.15)'; }, 300);
  }

  document.getElementById('atai-btn-like').addEventListener('click', function(){ likes++; localStorage.setItem(KEY_LIKE, likes); anime(this); update(); });
  document.getElementById('atai-btn-fire').addEventListener('click', function(){ fires++; localStorage.setItem(KEY_FIRE, fires); anime(this); update(); });
  document.getElementById('atai-btn-pass').addEventListener('click', function(){ passes++; localStorage.setItem(KEY_PASS, passes); anime(this); update(); });
})();
