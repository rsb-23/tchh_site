function createHeader() {
  const header = document.createElement("header");
  const nav = document.createElement("nav");

  nav.innerHTML = `
    <div class="logo">
     <a href="/" class="active">Tchh Blogs</a>
    </div>
    <ul class="nav-links">
      <li><a href="/" class="active">Home</a></li>
    </ul>
  `;

  header.appendChild(nav);
  document.body.prepend(header);
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = "<p>&copy; 2025 Tchh Blogs</p>";
  document.body.appendChild(footer);
}

function initLayout() {
  createHeader();
  createFooter();
}
