const searchInput = document.getElementById("search-input");
const searchDatalist = document.getElementById("search-suggestions");

if (searchInput && searchDatalist) {
  searchInput.addEventListener("input", () => {
    const inputValue = searchInput.value;
    for (const option of searchDatalist.options) {
      if (option.value === inputValue) {
        window.location.hash = option.value;
        break;
      }
    }
  });
}
