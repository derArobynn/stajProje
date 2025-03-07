import "../assets/css/main.css";
import Sidebar from "../Components/sidebar.js";
import Header from "../Components/header.js";
import "../assets/jsx/pic_create.jsx";
import { useState, useEffect } from "react";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
}

function Gallery() {
  const [galleryData, setGalleryData] = useState<GalleryItem[]>([]); // JSON verisini tutacak state
  const [currentPage, setCurrentPage] = useState(1); // Şu anki sayfa numarasını tutar
  const [imagesPerPage] = useState(8); // Sayfa başına gösterilecek resim sayısı

  useEffect(() => {
    fetch("/images/resim_desc.json") // JSON dosyasının doğru yolu
      .then((response) => response.json())
      .then((data) => {
        setGalleryData(data); // JSON verisini state'e aktarıyoruz
      })
      .catch((error) => console.error("JSON yüklenirken hata oluştu:", error));
  }, []); // Component mount olduğunda çalışacak

  useEffect(() => {
    window.scrollTo(0, 0); // Sayfanın üst kısmına scroll et
  }, [currentPage]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = galleryData.slice(indexOfFirstImage, indexOfLastImage);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(galleryData.length / imagesPerPage); i++) {
    pageNumbers.push(i);
  }

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

            <div className="posts" id="articlesContainer">
              {currentImages.map((item) => (
                <article key={item.id}>
                  <a
                    href={`/images/img_fil/Pic_Fil_${item.id}.png`}
                    className="image"
                  >
                    <img
                      src={`/images/img_fil/Pic_Fil_${item.id}.png`}
                      alt={`Pic_Fil_${item.id}`}
                    />
                  </a>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul className="actions">
                    <li>
                      <a href="#" className="button">
                        More
                      </a>
                    </li>
                  </ul>
                </article>
              ))}
            </div>

            {/* Sayfalama (Pagination) */}
            <div className="pagination">
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={currentPage === number ? "active" : ""}
                >
                  {number}
                </button>
              ))}
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
