/* ═══════════════════════════════════════════════
   MILICE DE L'INCONTESTABLE — UI SCRIPT
   Tokyo 2116 · Division opérationnelle
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── COMPTEUR "DERNIÈRE MAJ" ─── */
  const lastUpdate = document.getElementById('last-update');
  if (lastUpdate) {
    let seconds = 0;
    setInterval(() => {
      seconds++;
      if (seconds < 60) {
        lastUpdate.textContent = `En direct · il y a ${seconds}s`;
      } else {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        lastUpdate.textContent = `En direct · il y a ${mins}m ${secs}s`;
      }
    }, 1000);
  }

  /* ─── LIVE INDICATOR BLINK ─── */
  const liveIndicator = document.getElementById('live-indicator');
  if (liveIndicator) {
    setInterval(() => {
      liveIndicator.style.opacity = liveIndicator.style.opacity === '0.2' ? '1' : '0.2';
    }, 800);
  }

  /* ─── HORLOGE MISSION (format fictif 2116) ─── */
  const missionDate = document.getElementById('mission-date');
  if (missionDate) {
    const startTime = new Date();
    const missionStart = {
      hours: 0,
      minutes: 1,
      seconds: 27
    };

    let totalSeconds =
      missionStart.hours * 3600 +
      missionStart.minutes * 60 +
      missionStart.seconds;

    setInterval(() => {
      totalSeconds++;
      const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
      const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
      const s = String(totalSeconds % 60).padStart(2, '0');
      missionDate.textContent = `14.02.2116 · ${h}:${m}:${s}`;
    }, 1000);
  }

  /* ─── GLITCH EFFECT sur le titre header ─── */
  const headerTitle = document.querySelector('.header-title');
  if (headerTitle) {
    const originalText = headerTitle.textContent;
    const glitchChars = '!@#$%^&*<>?/|\\[]{}';

    const glitch = () => {
      let iteration = 0;
      const interval = setInterval(() => {
        headerTitle.textContent = originalText
          .split('')
          .map((char, index) => {
            if (index < iteration) return originalText[index];
            if (char === ' ') return ' ';
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join('');
        if (iteration >= originalText.length) {
          clearInterval(interval);
          headerTitle.textContent = originalText;
        }
        iteration += 2;
      }, 40);
    };

    // Glitch au chargement
    setTimeout(glitch, 500);
    // Glitch aléatoire toutes les 12-20 secondes
    const randomGlitch = () => {
      glitch();
      setTimeout(randomGlitch, 12000 + Math.random() * 8000);
    };
    setTimeout(randomGlitch, 4000);
  }

  /* ─── TYPING EFFECT sur la directive ─── */
  const directiveText = document.querySelector('.directive-text');
  if (directiveText) {
    const fullText = directiveText.textContent.trim();
    directiveText.textContent = '';
    directiveText.style.borderRight = '1px solid var(--red)';

    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        directiveText.textContent += fullText[i];
        i++;
      } else {
        clearInterval(typing);
        // Curseur qui clignote puis disparaît
        let blinks = 0;
        const cursor = setInterval(() => {
          directiveText.style.borderRight =
            blinks % 2 === 0 ? 'none' : '1px solid var(--red)';
          blinks++;
          if (blinks > 6) {
            clearInterval(cursor);
            directiveText.style.borderRight = 'none';
          }
        }, 400);
      }
    }, 18);
  }

  /* ─── SCAN LINE — désactivée ─── */
  const scanLine = document.querySelector('.scan-line');
  if (scanLine) { scanLine.remove(); }

  /* ─── NOISE OVERLAY FLICKER ─── */
  const container = document.querySelector('.container');
  if (container) {
    setInterval(() => {
      if (Math.random() < 0.05) {
        container.style.opacity = '0.96';
        setTimeout(() => { container.style.opacity = '1'; }, 80);
      }
    }, 500);
  }

});
