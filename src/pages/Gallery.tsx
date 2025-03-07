import "../assets/css/main.css";
import Sidebar from "../Components/sidebar";
import Header from "../Components/header";

function Gallery() {
  return (
    <div id="wrapper">
      {/*<!-- Main -->*/}
      <div id="main">
        <div className="inner">
          {/*<!-- Header -->*/}
          <Header />

          {/*<!-- Section -->*/}
          <section>
            <header className="major">
              <h2>Ipsum sed dolor</h2>
            </header>
            <div className="posts">
              <article>
                <a href="#" className="image">
                  <img src="" alt="" />
                </a>
                <h3>Interdum aenean</h3>
                <p>
                  Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                  dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
                  lorem feugiat tempus aliquam.
                </p>
                <ul className="actions">
                  <li>
                    <a href="#" className="button">
                      More
                    </a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" className="image">
                  <img src="images/img_fil/Pic_Fil_2.png" alt="" />
                </a>
                <h3>Nulla amet dolore</h3>
                <p>
                  Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                  dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
                  lorem feugiat tempus aliquam.
                </p>
                <ul className="actions">
                  <li>
                    <a href="#" className="button">
                      More
                    </a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" className="image">
                  <img src="images/img_fil/Pic_Fil_3.png" alt="" />
                </a>
                <h3>Tempus ullamcorper</h3>
                <p>
                  Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                  dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
                  lorem feugiat tempus aliquam.
                </p>
                <ul className="actions">
                  <li>
                    <a href="#" className="button">
                      More
                    </a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" className="image">
                  <img src="images/img_fil/Pic_Fil_4.png" alt="" />
                </a>
                <h3>Sed etiam facilis</h3>
                <p>
                  Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                  dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
                  lorem feugiat tempus aliquam.
                </p>
                <ul className="actions">
                  <li>
                    <a href="#" className="button">
                      More
                    </a>
                  </li>
                </ul>
              </article>
            </div>
          </section>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}

export default Gallery;
