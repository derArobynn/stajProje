import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]); // Veriyi tutacak state

  // JSON verisini çekme
  useEffect(() => {
    fetch("/images/resim_desc.json") // JSON dosyasının doğru yolu
      .then((response) => response.json())
      .then((data) => {
        setGalleryData(data); // Veriyi state'e aktarıyoruz
      })
      .catch((error) => console.error("JSON yüklenirken hata oluştu:", error));
  }, []); // İlk renderda çalışacak

  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          {/* Header ve diğer içerik */}
          <section>
            <header className="major">
              <h2>Gallery</h2>
            </header>
            <div className="posts" id="articlesContainer">
              {galleryData.map((item) => (
                <article key={item.id}>
                  <a href="#" className="image">
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
