import React, { useState, useEffect } from 'react';
import styles from './styles/style.js';
import InfinityLogo from './assets/InfinityLogo.png';
import WhatsAppIcon from './assets/WhatsAppIcon.png';
import IconOrdem2 from './assets/IconOrdem2.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './screens/Home';
import DesignGrafico from './screens/DesignGrafico';
import Aplicativos from './screens/Aplicativos';
import Manutençao from './screens/Manutençao';
import PortifoliosInfinity from './screens/PortifoliosInfinity';
import Serviços from './screens/Serviços';
import ScrollToTop from '../src/screens/ScrollToTop.js';


const LetterByLetterText = ({ text, interval = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const intervalId = setInterval(() => {
        setDisplayedText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, interval);

      return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado ou currentIndex muda
    }
  }, [text, currentIndex, interval]);

  return (
    <span>
      {displayedText}
    </span>
  );
};


const BlinkingText = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(prevIsVisible => !prevIsVisible);
    }, 1000); // Alterna a visibilidade a cada 1000 ms (1 segundo)

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <span style={{ 
      color: '#000', 
      fontSize: '1.2rem', 
      textAlign: 'center', 
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 1.0s ease' ,
      fontWeight: 'bold',
      
      

      
    }}>
      Saiba mais
    </span>
  );
};

const App = () => {

  
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (button) => setHoveredButton(button);
  const handleMouseLeave = () => setHoveredButton(null);

  // Aplica estilos condicionalmente com base no tamanho da tela
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  const containerStyle = isMobile
    ? { ...styles.container, ...styles.mediaQueries.container }
    : styles.container;

  const logoStyle = isMobile
    ? { ...styles.logo, ...styles.mediaQueries.logo }
    : styles.logo;

  const WhatsStyle = isMobile
    ? { ...styles.IconWhatsApp, ...styles.mediaQueries.IconWhatsApp }
    : styles.IconWhatsApp;

  const MenuStyle = isMobile
    ? { ...styles.menu, ...styles.mediaQueries.menu }
    : styles.menu;


    const handleClick = () => {
      window.open('https://contate.me/infinity-technology')
    };

    const [hovered, setHovered] = useState(false);
    
    const handleMouseOver = () => {
      setHovered(true);
    };
  
    const handleMouseOut = () => {
      setHovered(false);
    };

  return (
    <Router>
      <ScrollToTop /> {/* Adiciona ScrollToTop aqui */}
      <div style={{...containerStyle, }}>
        <img src={InfinityLogo} alt="logo" style={logoStyle} />

       <div style={{position:'absolute', top:'12%', padding:'10px',  transform: 'translateY(10%)',
            transition: 'transform 0.3s ease, max-width 0.3s ease', marginTop:'33px', }}>
       <p style={styles.textoAzulSombraP0}>
          <LetterByLetterText text="Infinity Technology" interval={100} />
        </p>

       </div>
        <button
          style={{ backgroundColor: 'transparent', border: 'none' }}
          onMouseEnter={() => handleMouseEnter('ordem')}
          onMouseLeave={handleMouseLeave}
          onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
    onClick={handleClick}
        >
          <img src={IconOrdem2} alt="ordem" style={{
            maxWidth: '4%',
            minWidth: '56px',
            position: 'absolute',
            top: '50px',
            right: '89%',
            transform: 'translateX(43%)',
            transition: 'transform 0.3s ease, max-width 0.3s ease',
            margin: '5px',
            cursor: 'pointer',
            marginLeft: '20px',
          }} />
        </button>

        {hoveredButton === 'ordem' && (
          <div style={{
            position: 'absolute',
            top: '70px',
            right: '72%',
            backgroundColor: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            zIndex: 10,
          }}>
            Agende o Suporte!
          </div>
        )}

        
        <button
          style={{ backgroundColor: 'transparent', border: 'none' }}
          onMouseEnter={() => handleMouseEnter('whatsapp')}
          onMouseLeave={handleMouseLeave}
          onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
    onClick={handleClick}
        >
          <img src={WhatsAppIcon} alt="IconWhatsApp" style={WhatsStyle} />
        </button>
   

        {hoveredButton === 'whatsapp' && (
          <div style={{
            position: 'absolute',
            top: '70px',
            right: '15%', // Ajuste a posição conforme necessário
            backgroundColor: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            zIndex: 10,
          }}>
            Fale Conosco!
          </div>
        )}

        <div style={MenuStyle} alt='menu'>
          {['Home', 'Serviços', 'Portifólio', 'Manutençao', 'Design Gráfico', 'Aplicativos'].map((item, index) => (
            <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`} key={index} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  ...styles.menuItem,
                  ...(hoveredButton === index ? styles.menuItemHover : {})
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item}
              </div>
            </Link>
          ))}
        </div>

        <div style={styles.container2}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Design-Gráfico" element={<DesignGrafico />} />
            <Route path='/Aplicativos' element={<Aplicativos />} />
            <Route path='/Manutençao' element={<Manutençao />} />
            <Route path='/Portifólio' element={<PortifoliosInfinity />} />
            <Route path='/Serviços' element={<Serviços />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
