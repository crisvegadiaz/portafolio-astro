const form = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-button");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const originalButtonHTML = submitButton.innerHTML;
  submitButton.disabled = true;

  const animationFrames = ["📪","📭","📬","📫"];
  let frameIndex = 0;
  const animationInterval = setInterval(() => {
    submitButton.textContent = animationFrames[frameIndex];
    frameIndex = (frameIndex + 1) % animationFrames.length;
  }, 250);

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/6b9bc4d351de1366c2abbbd01daa6598",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (response.ok) {
      form.reset();
      alert("¡Gracias por tu mensaje! Te contactaré pronto.");
    } else {
      alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
    }
  } catch (error) {
    alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
  } finally {
    clearInterval(animationInterval);
    submitButton.innerHTML = originalButtonHTML;
    submitButton.disabled = false;
  }
});
