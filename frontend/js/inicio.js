/* Inicio · micro-interacciones de las tarjetas de prompts destacados */

function copyPrompt(buttonElement, targetId) {
  const codeElement = document.getElementById(targetId);
  if (!codeElement) return;

  const text = codeElement.innerText.trim();
  navigator.clipboard.writeText(text).then(() => {
    const iconSpan = buttonElement.querySelector('span');
    if (iconSpan) {
      const originalIcon = iconSpan.innerText;
      iconSpan.innerText = 'check';
      buttonElement.classList.add('text-emerald-400', 'border-emerald-500/40');
      setTimeout(() => {
        iconSpan.innerText = originalIcon;
        buttonElement.classList.remove('text-emerald-400', 'border-emerald-500/40');
      }, 2000);
    }
  });
}
