import { useState } from 'react';
import "../styles/slideshow.css"; // Arquivo de estilo separado
import CamisetaBranca from  "../assets/images/camiseta_branca.png";
import BonePreto from  "../assets/images/bone_preto.png";
import CamisetaTubular from  "../assets/images/camiseta_tubular_chaos.png";
import HoodieKolbalto from  "../assets/images/hoodie_kobalto_chaos.png";
import HoodieChumbo from  "../assets/images/hoodie_chumbo_chaos.png";

import CamisetaBranca2 from  "../assets/images/camiseta_branca_modelo.png";
import BonePreto2 from  "../assets/images/bone_preto2.png";
import CamisetaTubular2 from  "../assets/images/camiseta_tubular_modelo.png";
import HoodieKolbalto2 from  "../assets/images/hoodie_kobalto_modelo.png";
import HoodieChumbo2 from  "../assets/images/hoodie_chumbo_modelo.png";

const SlideShow = () => {
  const images = [
    {default: CamisetaBranca, hover: CamisetaBranca2, name: "Camiseta Branca", price: "R$99,00"},
    {default: HoodieKolbalto, hover: HoodieKolbalto2, name: "Hoodie Kolbalto", price: "R$199,00"},
    {default: HoodieChumbo, hover: HoodieChumbo2, name: "Hoodie Chumbo", price: "R$209,00"},    
    {default: BonePreto, hover: BonePreto2, name: "Dad Hat Preto", price: "R$209,00"},
    {default: CamisetaTubular, hover: CamisetaTubular2, name: "Camiseta Tubular", price: "R$129,00"},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const totalImages = images.length;

  // Calcula quantos grupos de 3 imagens podemos ter
  const maxIndex = Math.max(totalImages - 3, 0);


  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };


  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slideshow-container">
        <div
        className="slideshow"
        style={{
          transform: `translateX(-${currentIndex * (100 / 3)}%)`,  // Mantém 3 imagens visíveis
        }}
      >
       {images.map((image, index) => (
          <div key={index} className="slide-item" style={{ flex: '0 0 33.33%' }}>
            <img
              src={hoveredIndex === index ? image.hover : image.default}
              alt={image.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="slide"
            />
            <div className="slide-info">
              <p>{image.name}</p>
              <p>{image.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className='botao_slide' onClick={handlePrev} disabled={currentIndex === 0}>
        &#8592;
      </button>
      <button className='botao_slide' onClick={handleNext} disabled={currentIndex >= images.length - 3}>
        &#8594;
      </button>
    </div>
  );
};

export default SlideShow;