(function(){
  var wrap = document.querySelector('.atai-wrap-inner') || document.querySelector('.atai-wrap');
  if (!wrap) return;

  var KEY_LIKE = 'atai_likes_' + window.location.href;
  var KEY_PASS = 'atai_passes_' + window.location.href;

  var likes  = parseInt(localStorage.getItem(KEY_LIKE) || '0');
  var passes = parseInt(localStorage.getItem(KEY_PASS) || '0');

  var zone = document.createElement('div');
  zone.style.cssText = 'padding:10px 14px 14px;text-align:center;';

  zone.innerHTML =
    '<div style="font-size:9px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;color:#c45c8a;margin-bottom:10px;">Qu\'en pensez-vous ?</div>' +
    '<div style="display:flex;justify-content:center;gap:16px;align-items:center;">' +
      '<button id="atai-btn-pass" style="width:46px;height:46px;border-radius:50%;border:2px solid #e0d5cc;background:#fff;font-size:20px;cursor:pointer;transition:transform 0.15s ease;">✗</button>' +
      '<div style="font-size:10px;color:#c4b5ae;line-height:1.6;"><span id="atai-score-like" style="font-size:16px;font-weight:bold;color:#9e2456;">0</span> ♥<br><span id="atai-score-pass" style="font-size:16px;font-weight:bold;color:#aaa;">0</span> ✗</div>' +
      '<button id="atai-btn-like" style="width:46px;height:46px;border-radius:50%;border:2px solid #ffd0d0;background:#fff;font-size:20px;cursor:pointer;transition:transform 0.15s ease;">♥</button>' +
    '</div>';

  wrap.appendChild(zone);

  function update() {
    document.getElementById('atai-score-like').textContent = likes;
    document.getElementById('atai-score-pass').textContent = passes;
  }
  update();

  function anime(btn, scale, color) {
    btn.style.transform = 'scale(' + scale + ')';
    btn.style.background = color;
    setTimeout(function(){ btn.style.transform = 'scale(1)'; btn.style.background = '#fff'; }, 300);
  }

  document.getElementById('atai-btn-like').addEventListener('click', function(){
    likes++;
    localStorage.setItem(KEY_LIKE, likes);
    anime(this, 1.3, '#fff0f4');
    update();
  });

  document.getElementById('atai-btn-pass').addEventListener('click', function(){
    passes++;
    localStorage.setItem(KEY_PASS, passes);
    anime(this, 1.3, '#f5f5f5');
    update();
  });
})();
