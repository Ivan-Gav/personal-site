import { useEffect } from 'react';

// Максимальное время ожидания шрифтов, после которого страница
// показывается в любом случае.
const MAX_WAIT = 8000;

export default function BootGate() {
  useEffect(() => {
    const boot = document.getElementById('boot');
    if (!boot) return;

    let done = false;

    const reveal = () => {
      if (done) return;
      done = true;
      boot.dataset.done = '';
      boot.addEventListener('transitionend', () => boot.remove(), {
        once: true,
      });
      window.setTimeout(() => boot.remove(), 600);
    };

    const timer = window.setTimeout(reveal, MAX_WAIT);
    const fonts = document.fonts ? document.fonts.ready : Promise.resolve();
    fonts.then(reveal).catch(reveal);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
