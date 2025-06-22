// Alternar tema claro/escuro
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme');
});

// Aplicar tema salvo
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light-theme';
  document.body.classList.add(savedTheme);
  
  // Gradiente interativo (se existir na página)
  const gradientBox = document.querySelector('.box-degrade');
  if (gradientBox) {
    gradientBox.addEventListener('mousemove', (e) => {
      const rect = gradientBox.getBoundingClientRect();
      gradientBox.style.setProperty('--mouse-x', `${(e.clientX - rect.left) / rect.width * 100}%`);
      gradientBox.style.setProperty('--mouse-y', `${(e.clientY - rect.top) / rect.height * 100}%`);
    });
  }
});