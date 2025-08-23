document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("language");

  languageSelect.addEventListener("change", (event) => {
    console.log("Language changed to:", event.target.value);
    const selectedLanguage = event.target.value;
    console.log("/" + selectedLanguage);
    window.location.href = `/${selectedLanguage}`;
  });
});
