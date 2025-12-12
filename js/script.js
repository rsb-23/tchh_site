function filterLinks() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll(".link-item");
  items.forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(query) ? "" : "none";
  });
}

async function loadLinks(fileName) {
  const response = await fetch(fileName);
  const links = await response.json();
  links.sort((a, b) => a.title.localeCompare(b.title));

  const linkList = document.getElementById('linkList');

  links.forEach(link => {
    const listItem = document.createElement('li');
    listItem.classList.add('link-item');
    listItem.innerHTML = `
            <a href="${link.url}" target="_blank">${link.title}</a>
            <p>${link.description}</p>
          `;
    linkList.appendChild(listItem);
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace' &&
      !['INPUT', 'TEXTAREA'].includes(e.target.tagName) &&
      !e.target.isContentEditable) {
    e.preventDefault();
    window.history.back();
  }
});
