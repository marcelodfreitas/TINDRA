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

  
  
  document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    const mobileBtn = document.getElementById("mobile-btn");
    menu.classList.toggle("hidden");
    mobileBtn.classList.toggle("hidden");
  });
