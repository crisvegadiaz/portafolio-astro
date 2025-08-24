document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("header nav .button");
  const secondarySidebar = document.querySelector(".secondary-sidebar");
  const explore = document.querySelector(".explore");
  const contact = document.querySelector(".contact");
  const search = document.querySelector(".search");

  function setActive(button, active) {
    buttons.forEach((btn) => btn.classList.remove("button-active"));
    secondarySidebar.classList.toggle("secondary-active", active);
    document.body.classList.toggle("submenu-active", active);
    if (active) button.classList.add("button-active");
  }

  function toggleSection(title) {
    explore.classList.toggle("explore-active", title === "explore");
    contact.classList.toggle("contact-active", title === "contact");
    search.classList.toggle("search-active", title === "search");
  }

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.currentTarget;
      const isActive = !target.classList.contains("button-active");
      if (
        ["search", "contact", "explore"].includes(event.currentTarget.title)
      ) {
        setActive(target, isActive);
        toggleSection(isActive ? target.getAttribute("title") : "");
      }
    });
  });
});
