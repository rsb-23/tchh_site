function filterLinks() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll(".link-item");
  items.forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(query) ? "" : "none";
  });
}