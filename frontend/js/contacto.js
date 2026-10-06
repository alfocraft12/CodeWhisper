/* Contacto · copiado al portapapeles y envío simulado del formulario */

function copyToClipboard(text, btnId, iconId, textId) {
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById(btnId);
    const icon = document.getElementById(iconId);
    const label = document.getElementById(textId);

    const origIcon = icon.textContent;
    const origLabel = label.textContent;

    icon.textContent = 'check';
    label.textContent = '¡Copiado!';
    btn.classList.add('border-primary', 'text-primary');

    setTimeout(() => {
      icon.textContent = origIcon;
      label.textContent = origLabel;
      btn.classList.remove('border-primary', 'text-primary');
    }, 2000);
  }).catch(err => {
    console.error('Error copying text:', err);
  });
}

function handleFormSubmit(event) {
  event.preventDefault();
  const submitBtn = document.getElementById('submit-btn');
  const submitText = document.getElementById('submit-text');
  const feedback = document.getElementById('form-feedback');

  submitBtn.disabled = true;
  submitText.textContent = 'Enviando payload...';

  setTimeout(() => {
    submitText.textContent = 'Mensaje Enviado';
    feedback.classList.remove('hidden');
    document.getElementById('contact-form').reset();

    setTimeout(() => {
      submitBtn.disabled = false;
      submitText.textContent = 'Enviar mensaje';
    }, 3000);
  }, 700);
}
