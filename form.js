const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function(event) {
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.telefono.value.trim();
  const message = form.message.value.trim();

  // 🔴 CONTROLLI

  if (name.length < 3) {
    status.innerHTML = " Il nome deve avere almeno 3 caratteri";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    status.innerHTML = " Inserisci una email valida";
    return;
  }

  // 📞 CONTROLLO TELEFONO
  if (phone !== "") {
    const phoneRegex = /^[0-9]+$/; // solo numeri

    if (!phoneRegex.test(phone)) {
      status.innerHTML = " Il telefono deve contenere solo numeri";
      return;
    }

    if (phone.length < 8) {
      status.innerHTML = " Il numero di telefono è troppo corto";
      return;
    }
  }

  if (message.length < 10) {
    status.innerHTML = " Il messaggio è troppo corto (min 10 caratteri)";
    return;
  }

  // 🟡 INVIO
  status.innerHTML = "⏳ Invio in corso...";

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.innerHTML = " Richiesta inviata con successo!";
      form.reset();
    } else {
      status.innerHTML = " Errore nell'invio della richiesta.";
    }
  } catch (error) {
    status.innerHTML = " Errore di rete.";
  }
});