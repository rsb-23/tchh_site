function createHeaderOld() {
    if (document.querySelector('header')) return; // Avoid duplicating header

    const header = document.createElement('header');
    header.innerHTML = '<nav><a href="../index.html" class="home-button">Home</a></nav>';
    document.body.prepend(header);
}
function createHeader() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  
  nav.innerHTML = `
    <div class="logo">Tchh Blogs</div>
    <ul class="nav-links">
      <li><a href="../index.html" class="active">Home</a></li>
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