// Lógica interactiva de la landing page.
// Gestiona el cambio de propuestas visuales, apertura del modal de caso
// y la redirección al contacto mediante WhatsApp.
const site = document.querySelector('#site');
const switcher = document.querySelectorAll('[data-theme]');
const dialog = document.querySelector('#dialog');
const title = document.querySelector('#dialogTitle');

// Alterna la clase del contenedor principal para cambiar el estilo visual
// del sitio según la propuesta elegida en la barra superior.
switcher.forEach(button => button.addEventListener('click', () => {
  switcher.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  site.className = button.dataset.theme;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}));

// Abre el modal con el caso seleccionado y actualiza el contenido dinámico.
document.querySelectorAll('.open-case').forEach(button => button.addEventListener('click', () => {
  title.textContent = button.dataset.case;
  const detail = dialog.querySelector('p:not(.eyebrow)');
  detail.textContent = button.dataset.case === 'Edificio Manzana 40'
    ? 'Primera obra ejecutada de Daniela: ejecución en obra y coordinación BIM del sistema de combate a incendios del edificio Manzana 40 (2019–2021).'
    : 'Este panel representa una navegación a una página de proyecto. Aquí se podrían mostrar el desafío, proceso, resultados y testimonios.';
  dialog.showModal();
}));

document.querySelector('.close').addEventListener('click', () => dialog.close());
document.querySelector('#dialogCta').addEventListener('click', () => dialog.close());

// Maneja el clic en el botón de correo para copiar al portapapeles
const emailButton = document.querySelector('#emailButton');
if (emailButton) {
  emailButton.addEventListener('click', () => {
    const email = 'danielavc0506@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      const originalText = emailButton.innerHTML;
      emailButton.textContent = '✓ Copiado';
      setTimeout(() => {
        emailButton.innerHTML = originalText;
      }, 2000);
    }).catch(() => {
      alert('Email: danielavc0506@gmail.com');
    });
  });
}
