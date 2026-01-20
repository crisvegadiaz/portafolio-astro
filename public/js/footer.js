document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("language");

  if (languageSelect) {
    const availableLangs = ["es", "en"];
    const currentPathSegments = window.location.pathname.split("/").filter(Boolean);
    const currentLang = availableLangs.includes(currentPathSegments[0]) ? currentPathSegments[0] : "es";
    languageSelect.value = currentLang;

    languageSelect.addEventListener("change", (e) => {
      const selectedLang = e.target.value;
      const currentPath = window.location.pathname;
      const pathSegments = currentPath.split("/").filter(Boolean);

      const defaultLang = "es";

      if (availableLangs.includes(pathSegments[0])) {
        pathSegments.shift();
      }

      const remainingPath = pathSegments.join('/');
      let newPath = '';

      if (selectedLang !== defaultLang) {
        newPath = `/${selectedLang}`;
      }

      if (remainingPath) {
        newPath = `${newPath}/${remainingPath}`;
      }

      if (newPath === '') {
        newPath = '/';
      }
      window.location.href = newPath;
    });
  }
});
