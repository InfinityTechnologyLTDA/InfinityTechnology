import React, { useState, useEffect } from 'react';
import styles from '../styles/style.js'; // Importe os estilos do arquivo styles.js
import Profissionais1 from '../assets/Profissionais1.png';
import Profissionais2 from '../assets/Profissionais2.png';
import ProgramaçaoApp from '../assets/ProgramaçaoApp.png';
import Responsividade from '../assets/Responsividade.png';
import HospedagemEManutençao from '../assets/HospedagemEManutençao.png';
import { motion, AnimatePresence, useAnimation  } from 'framer-motion';
import CsTactics1 from '../assets/CsTactics1.png';
import LaraBug1 from '../assets/LaraBug1.png';
import XDesign1 from '../assets/XDesign1.png';
import XDesign from '../screens/XDesign';
import LaraBug from '../screens/LaraBug';
import CsTactics from '../screens/CsTactics';



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





const BlinkingText5 = () => {
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
      fontSize: '1.0rem', 
      textAlign: 'center', 
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 1.0s ease' ,
      fontWeight: 'bold',
      display: 'inline-block', // Garante que o bloco não sublinhe espaços vazios

      

      
    }}>
     Desenvolvidos por nossa equipe
    </span>
  );
};










const PortifoliosInfinity = () => {
  useEffect(() => {
    // Rola a página para o topo sempre que o componente é montado
    window.scrollTo(0, 0);
  }, []);
  const [contents, setContents] = useState([]); // Conteúdo dinâmico
  const [isHovered, setIsHovered] = useState(false);

  // Aplica estilos condicionalmente com base no tamanho da tela
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  const containerImageStyle = isMobile
    ? { ...styles.imageContainer, ...styles.mediaQueries.imageContainer }
    : styles.imageContainer;


    const [width] = useState(window.innerWidth);
    const [height] = useState(window.innerHeight);
  
    const [hovered, setHovered] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [hovered3, setHovered3] = useState(false);
  
    const [fadeInImage, setFadeInImage] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
  
    const [animationActive, setAnimationActive] = useState(false);
    const [selectedTab, setSelectedTab] = useState('false');
    const [fadeInActive, setFadeInActive] = useState(false);
    
  
    const controls = useAnimation();
    const [position, setPosition] = useState(0);
    const dragAmount = 245; // Quantidade de movimento necessário para mudar a posição
    const maxDrag = -245; // Limite máximo para a esquerda
    const minDrag = 245; // Limite mínimo para a direita
  
    const handleDragEnd = (event, info) => {
      const offset = info.offset.x;
  
      if (Math.abs(offset) > dragAmount / 2) {
        const direction = offset > 0 ? 1 : -1;
        const newPosition = position + (direction * dragAmount);
  
        if (newPosition >= maxDrag && newPosition <= minDrag) {
          setPosition(newPosition);
          controls.start({ x: newPosition, transition: { duration: 0.3 } });
        } else {
          controls.start({ x: position, transition: { duration: 0.3 } });
        }
      } else {
        controls.start({ x: position, transition: { duration: 0.3 } });
      }
    };
    

    useEffect(() => {
      
  
      const fadeInImageTimeout = setTimeout(() => {
        setFadeInImage(true);
      }, 750);
  
      const fadeOutTimeout = setTimeout(() => {
        setFadeOut(true);
      }, 5000);
  
  
    

  
      return () => {
       

        clearTimeout(fadeInImageTimeout);
        clearTimeout(fadeOutTimeout);
      };
    }, []);

    

    const handleNext = () => {
      const newPosition = position - dragAmount;
      if (newPosition >= maxDrag) {
          setPosition(newPosition);
          controls.start({ x: newPosition, transition: { duration: 0.3 } });
      }
    };
    
    const handlePrev = () => {
      const newPosition = position + dragAmount;
      if (newPosition <= minDrag) {
          setPosition(newPosition);
          controls.start({ x: newPosition, transition: { duration: 0.3 } });
      }
    };
    


    
    useEffect(() => {
      const animationTimeout = setTimeout(() => {
        setAnimationActive(true);
  
        setTimeout(() => {
          setFadeInActive(true);
        }, 1000);
      }, 500);
  
      return () => clearTimeout(animationTimeout);
    }, []);
  
    const handleTabClick = (tab) => {
      setFadeInActive(false);
  
      setTimeout(() => {
        setSelectedTab(tab);
        setFadeInActive(true);
      }, 500);
    };
  
    useEffect(() => {
      const fadeInImageTimeout = setTimeout(() => {
        setFadeInImage(true);
      }, 500);
  
      const fadeOutTimeout = setTimeout(() => {
        setFadeOut(true);
      }, 5000);
  
      return () => {
        clearTimeout(fadeInImageTimeout);
        clearTimeout(fadeOutTimeout);
      };
    }, []);
  
    const handleMouseOver = () => {
      setHovered(true);
    };
  
    const handleMouseOut = () => {
      setHovered(false);
    };
  
    const handleMouseOver2 = () => {
      setHovered2(true);
    };
  
    const handleMouseOut2 = () => {
      setHovered2(false);
    };
  
    const handleMouseOver3 = () => {
      setHovered3(true);
    };
  
    const handleMouseOut3 = () => {
      setHovered3(false);
    };
  

  return (
    <div className={styles.container3}>
      {/* Cabeçalho */}
      <header className={styles.header}>
        {/* Coloque aqui o conteúdo do cabeçalho */}
      </header>

      {/* Banner Principal */}
      <div className={styles.banner}>
        <p style={styles.textoAzulSombra}>
          <LetterByLetterText text="Portifólio" interval={100} />
        </p>
      
      </div>


  
     <p style={styles.textoAzulSombraP}>
      <span style={styles.neonText2}><BlinkingText5 /></span>   
     </p>
     

      <div
      style={{
        position: 'relative',
        bottom: `${height * 0.0}px`,
        left: `${width * 0.005}px`,
        padding: '10px',
        opacity: fadeInImage ? 1 : 0,
        transition: 'opacity 1s',
        alignItems:'center',
        margin:'20px',
        justifyContent: "center",
        maxWidth: '100vw',
        maxHeight:'80vh',
        overflow: 'initial', /* Oculta qualquer conteúdo que ultrapasse */
justifyContent: 'center',
alignItems: 'center', // Centraliza verticalmente dentro do motion.div
bottom:'10%'

      }}
    >
 <div style={{ position:'relative', justifyContent:'center', alignItems:'center', width:'150px' ,  height:'30px',   display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', left:'50%', bottom:'5%', zIndex:1000}}>


    <button onClick={handlePrev} style={{ marginRight: '265%', marginTop:'377%', borderRadius:'7px', background: 'linear-gradient(to right, transparent, #333,#333, #333, #333, #333)', color:'white', border:'100px'  }}>Anterior</button>

    
    </div>

    <div style={{ position:'relative', justifyContent:'center', alignItems:'center', width:'150px' , height:'30px',   display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', left:'50%', bottom:'5%',  zIndex:1000}}>


    <button onClick={handleNext} style={{ marginLeft:'63%', marginTop:'333%', borderRadius:'7px', background: 'linear-gradient(to right, #333, #333,#333, #333, #333, transparent)',  color:'white', border:'100px'}}>Próximo</button>

    
    </div>
      
      <motion.div   animate={controls} drag="x"   dragConstraints={{ left: maxDrag, right: minDrag }}
      onDragEnd={handleDragEnd}
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          position: 'relative',
          maxWidth:"100vw", /* Limita a largura máxima ao tamanho da viewport */
          cursor:'grab',
       right: `${width * 0.0}`,
          maxHeight:'100%',
          gap:'28px',

          
        }}
      >
        <motion.div
          style={{
            position: 'relative',
            border: '3px solid #333',
            borderRadius: '10px',
            boxShadow: '-5px -5px 10px #f30fb3',
            padding: '4px',
            marginRight: '00px',
            right: `${width * 0.0}`,
            cursor: 'grab',
            transition: 'transform 0.5s ease-in-out',
            transform: hovered ? 'scale(0.8)' : 'scale(0.7)',
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => handleTabClick('CsTactics')}
        >
          <img src={CsTactics1} alt='Projeto CsTactics' style={{ width: '200px', borderRadius: '10px' }} />
        </motion.div>

        <motion.div
          style={{
            position: 'relative',
            border: '3px solid #333',
            borderRadius: '10px',
            boxShadow: '-5px -5px 10px #f30fb3',
            padding: '4px',
            marginRight: '0px',
            right: `${width * 0.0}`,
            cursor: 'grab',
            transition: 'transform 0.5s ease-in-out',
            transform: hovered2 ? 'scale(0.8)' : 'scale(0.7)',
            
          }}
          onMouseOver={handleMouseOver2}
          onMouseOut={handleMouseOut2}
          onClick={() => handleTabClick('LaraBug')}
        >
          <img src={LaraBug1} alt='Projeto LaraBug' style={{ width: '200px', borderRadius: '10px' }} />
        </motion.div>

        <motion.div
          style={{
            position: 'relative',
            border: '3px solid #333',
            borderRadius: '10px',
            boxShadow: '-5px -5px 10px #f30fb3',
            padding: '4px',
            marginRight: '0px',

            right: `${width * 0.1}`,
            cursor: 'grab',
            transition: 'transform 0.5s ease-in-out',
            transform: hovered3 ? 'scale(0.8)' : 'scale(0.7)',
          }}
          onMouseOver={handleMouseOver3}
          onMouseOut={handleMouseOut3}
          onClick={() => handleTabClick('XDesign')}
        >
          <img src={XDesign1} alt='Projeto XDesign' style={{ width: '200px', borderRadius: '10px' }} />
        </motion.div>
      </motion.div>

      <div
        style={{
          opacity: animationActive ? 1 : 0,
          transform: animationActive ? 'scale(1)' : 'scale(0.5)',
          transition: 'opacity 1s, transform 1s',
          width: '100%',
        }}
      >
        {(selectedTab === 'CsTactics' || selectedTab === 'XDesign' || selectedTab === 'LaraBug') && (
          <AnimatePresence initial={false}>
            <motion.div
              key={selectedTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: fadeInActive ? 1 : 0 }}
              exit={{ opacity: fadeOut ? 0 : 1 }}
              style={{ opacity: fadeInActive ? 1 : 0, transition: 'opacity 1s', width: '100%' }}
            >
              {selectedTab === 'CsTactics' && <CsTactics />}
              {selectedTab === 'XDesign' && <XDesign />}
              {selectedTab === 'LaraBug' && <LaraBug />}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>

      {/* Imagem com efeito de esmaecer */}
     
      {/* Rodapé */}
      <footer className={{...styles.footer,}}>
        <p style={{...styles.textoAzulSombra,     marginTop:'100px', gap:'50px',  fontSize:'20px'
}}>&copy; {new Date().getFullYear()} - Infinity Technology</p>
      </footer>
    </div>
  );
};

export default PortifoliosInfinity;
