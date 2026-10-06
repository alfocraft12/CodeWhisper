/* Detalle de prompt · copiar y descargar el prompt */

function handlePromptCopy() {
  const promptEl = document.getElementById('promptTextContent');
  const text = promptEl ? promptEl.innerText : '';

  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copyPromptBtn');
    const icon = document.getElementById('copyIcon');
    const textLabel = document.getElementById('copyText');

    if (!btn || !icon || !textLabel) return;

    const originalClasses = "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]";
    const successClasses = "bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)]";

    btn.className = `px-4 py-1.5 rounded-lg text-label-button font-label-button font-medium transition-all flex items-center gap-2 ${successClasses}`;
    icon.innerText = "check_circle";
    textLabel.innerText = "¡Copiado al portapapeles!";

    setTimeout(() => {
      btn.className = `px-4 py-1.5 rounded-lg text-label-button font-label-button font-medium text-white transition-all flex items-center gap-2 active:scale-[0.96] ${originalClasses}`;
      icon.innerText = "content_copy";
      textLabel.innerText = "Copiar prompt";
    }, 2200);
  }).catch(err => {
    console.error('Error al copiar:', err);
  });
}

function handleDownloadSnippet() {
  const text = document.getElementById('promptTextContent').innerText;
  const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'hexagonal-ddd-refactor.prompt.md';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
