function abrirModal(modalId) {
    document.querySelectorAll('.modal').forEach(modal => {
      if (modal.dataset.modal === modalId) {
        modal.classList.remove('hidden');
      }
    });
  }
  
  document.querySelectorAll('.closeModalBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.add('hidden');
      });
    });
  });
  
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  });
  
  const scrollButton = document.getElementById('scrollButton');

  
  // Função para verificar se é mobile e o scroll
  function handleScroll() {
    // Verifica se a largura da tela é menor que 640px (mobile, equivalente a 'sm' no Tailwind)
    if (window.innerWidth < 640) {
      // Se o usuário rolar mais de 100px, mostra o botão
      if (window.scrollY > 100) {
        scrollButton.classList.remove('hidden');
      } else {
        // Caso contrário, oculta o botão
        scrollButton.classList.add('hidden');
      }
    }
  }

  // Adiciona o evento de scroll
  window.addEventListener('scroll', handleScroll);

  // Adiciona o evento de resize para ajustar o comportamento ao redimensionar a tela
  window.addEventListener('resize', handleScroll);

  // Executa a função ao carregar a página para verificar o estado inicial
  handleScroll();