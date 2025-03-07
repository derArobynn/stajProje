import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/main.css";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive); // Sidebar'ı açma/kapama işlemi
  };
  return (
    <div id="sidebar" className={isActive ? "" : "inactive"}>
      <div className="inner">
        <nav id="menu">
          <header className="major">
            <h2>Menu</h2>
          </header>
          <ul>
            <li>
              <Link to="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/gallery">Galeri</Link>
            </li>
            <li>
              <Link to="/about">Hakkında</Link>
            </li>
          </ul>
        </nav>

        {/* Section */}
        <section>
          <header className="major">
            <h2>Ante interdum</h2>
          </header>
          <div className="mini-posts">
            <article>
              <a href="images/FilLogo_1.png" className="image">
                <img src="images/FilLogo_1.png" alt="" />
              </a>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                dolore aliquam.
              </p>
            </article>
            <article>
              <a href="#" className="image">
                <img src="#" alt="" />
              </a>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                dolore aliquam.
              </p>
            </article>
            <article>
              <a href="#" className="image">
                <img src="#" alt="" />
              </a>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                dolore aliquam.
              </p>
            </article>
          </div>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                More
              </a>
            </li>
          </ul>
        </section>

        {/* Section */}
        <section>
          <header className="major">
            <h2>Get in touch</h2>
          </header>
          <p>
            Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit
            lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam
            facilisis ante interdum. Sed nulla amet lorem feugiat tempus
            aliquam.
          </p>
          <ul className="contact">
            <li className="icon solid fa-envelope">
              <a href="#">information@untitled.tld</a>
            </li>
            <li className="icon solid fa-phone">(000) 000-0000</li>
            <li className="icon solid fa-home">
              1234 Somewhere Road #8254
              <br />
              Nashville, TN 00000-0000
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer id="footer">
          <p className="copyright">
            &copy; Untitled. All rights reserved. Demo Images:{" "}
            <a href="https://unsplash.com">Unsplash</a>. Design:{" "}
            <a href="https://html5up.net">HTML5 UP</a>.
          </p>
        </footer>
      </div>
      {/* Toggle butonunu ekliyoruz */}
      <a href="#sidebar" className="toggle" onClick={toggleSidebar}>
        <span className="toggle-icon">☰</span>
      </a>
    </div>
  );
};

export default Sidebar;
