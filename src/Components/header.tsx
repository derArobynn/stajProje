function Header() {
  return (
    <header id="header">
      <a href="/home" className="logo">
        <strong>Kişisel Blog</strong> by Nergiz Candemir
      </a>
      <ul className="icons">
        <li>
          <a href="#" className="icon brands fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands fa-facebook-f">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/nergizsanat/"
            className="icon brands fa-instagram"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
