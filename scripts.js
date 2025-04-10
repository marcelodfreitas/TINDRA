document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });

  function enviarWhatsApp(event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    const email = emailInput.value;
    const phone = phoneInput.value;

    const msg = encodeURIComponent(`${email} e ${phone}`);
    window.open(`https://wa.me/5551983117180?text=${msg}`, "_blank");

    // Limpa os campos após o envio
    emailInput.value = "";
    phoneInput.value = "";
  }

  function abrirSuporte() {
    const numero = "5551983117180"; // Substitua pelo número do suporte
    const mensagem = encodeURIComponent(
      "Olá! Preciso de ajuda com o TINDRA."
    );
    const url = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(url, "_blank");
  }

  function abrirModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      console.log(`Abrindo modal: ${id}`);
      modal.classList.remove("hidden");
    } else {
      console.warn(`Modal com ID '${id}' não encontrado.`);
    }
  }

  function fecharModal(id) {
    document.getElementById(id).classList.add('hidden');
  }

  window.addEventListener("click", function (e) {
    document.querySelectorAll(".modal").forEach((modal) => {
      const conteudo = modal.querySelector("div");
  
      // Garante que o clique foi fora do conteúdo e do botão que abre o modal
      if (
        !conteudo.contains(e.target) &&
        !modal.classList.contains("hidden") &&
        !e.target.matches("button[onclick^='abrirModal']")
      ) {
        modal.classList.add("hidden");
      }
    });
  });
  
  document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    const mobileBtn = document.getElementById("mobile-btn");
    menu.classList.toggle("hidden");
    mobileBtn.classList.toggle("hidden");
  });
