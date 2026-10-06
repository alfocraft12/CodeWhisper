/* Biblioteca · estado sin resultados — confirmación táctil de los botones de copiar */

document.querySelectorAll('[data-icon="content_copy"]').forEach(icon => {
  icon.parentElement.addEventListener('click', function (e) {
    e.preventDefault();
    const originalIcon = icon.innerText;
    icon.innerText = 'done';
    icon.classList.add('text-tertiary');
    setTimeout(() => {
      icon.innerText = originalIcon;
      icon.classList.remove('text-tertiary');
    }, 1800);
  });
});
