import React, { useState, useEffect } from 'react';
import styles from '../styles/style.js'; // Importe os estilos do arquivo styles.js
import ProgramaçaoApp from '../assets/ProgramaçaoApp.png';
import Responsividade from '../assets/Responsividade.png';
import HospedagemEManutençao from '../assets/HospedagemEManutençao.png';

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


const BlinkingText3 = () => {
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
      display: 'inline-block', // Garante que o bloco não sublinhe espaços vazios

    }}>
      Faça seu pedido!
    </span>
  );
};



const BlinkingText4 = () => {
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
      fontSize: '0.9rem', 
      textAlign: 'center', 
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 1.0s ease' ,
      fontWeight: 'bold',
      display: 'inline-block', // Garante que o bloco não sublinhe espaços vazios

    }}>
    sistemas
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
      fontSize: '0.9rem', 
      textAlign: 'center', 
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 1.0s ease' ,
      fontWeight: 'bold',
      display: 'inline-block', // Garante que o bloco não sublinhe espaços vazios

      

      
    }}>
      funcionam perfeitamente
    </span>
  );
};


const BlinkingText6 = () => {
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
      fontSize: '0.9rem', 
      textAlign: 'center', 
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 1.0s ease' ,
      fontWeight: 'bold',
      display: 'inline-block', // Garante que o bloco não sublinhe espaços vazios

      

      
    }}>
       garantir
    </span>
  );
};


const Aplicativos = () => {
  const [contents, setContents] = useState([]); // Conteúdo dinâmico
  const [isHovered, setIsHovered] = useState(false);

  // Aplica estilos condicionalmente com base no tamanho da tela
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  const containerImageStyle = isMobile
    ? { ...styles.imageContainer, ...styles.mediaQueries.imageContainer }
    : styles.imageContainer;

  return (
    <div className={styles.container2}>
      {/* Cabeçalho */}
      <header className={styles.header}>
        {/* Coloque aqui o conteúdo do cabeçalho */}
      </header>

      {/* Banner Principal */}
      <div className={styles.banner}>
        <p style={styles.textoAzulSombra}>
          <LetterByLetterText text="Aplicativos" interval={100} />
        </p>
        <p style={styles.textoAzulSombraP}>
        Desenvolvemos soluções digitais, sites, <span style={styles.neonText2}><BlinkingText4 /></span> e aplicativos para todas as plataformas.
        </p>
      </div>

      <div className={styles.banner}>
      
        <p style={styles.textoAzulSombraP}>
        Seja qual for a necessidade do seu negócio, criamos soluções que se adaptam perfeitamente aos seus objetivos.       </p>
      
        <p style={styles.textoAzulSombraP}>
        Com um design moderno e funcional, garantimos que sua presença online seja impactante e eficiente.        </p>
      
      </div>

      

      {/* Imagem com efeito de esmaecer */}
      <div
        style={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={ProgramaçaoApp}
          alt="Profissionais especializados para cada necessidade"
          style={{ ...containerImageStyle, width: '100%', alignItems: 'center', position: 'relative', border: '0.5px solid black', // Define a borda com 5px de largura e cor preta
            borderRadius: '10px', }}
        />
      </div>





      <div className={styles.banner}>
        <p style={styles.textoAzulSombra}>
          <LetterByLetterText text="Aplicações Responsivas" interval={100} />
        </p>
        <p style={styles.textoAzulSombraP}>
        Aplicações responsivas que <span style={styles.neonText2}><BlinkingText5 /></span> em todos os dispositivos.
        </p>
      </div>

      
      <div className={styles.banner}>
      
        <p style={styles.textoAzulSombraP}>
        Nossas aplicações são desenvolvidas para oferecer uma experiência de uso impecável, independentemente do dispositivo utilizado.      
       </p>
        <p style={styles.textoAzulSombraP}>
        Seja no celular, tablet ou computador, seu site ou aplicativo terá o mesmo nível de qualidade e desempenho.      
        </p>
      </div>


      {/* Imagem com efeito de esmaecer */}
      <div
        style={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={Responsividade}
          alt="Profissionais especializados para cada necessidade"
          style={{ ...containerImageStyle, width: '100%', alignItems: 'center', position: 'relative', border: '0px solid black', // Define a borda com 5px de largura e cor preta
            borderRadius: '10px', }}
        />
      </div>






      <div className={styles.banner}>
        <p style={styles.textoAzulSombra}>
          <LetterByLetterText text="Hospedagem e Manutenção de Sites" interval={100} />
        </p>
        <p style={styles.textoAzulSombraP}>
        Hospedagem e manutenção, para <span style={styles.neonText2}><BlinkingText6 /></span> o melhor desempenho do seu site.
        </p>
      </div>


      {/* Imagem com efeito de esmaecer */}
      <div
        style={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={HospedagemEManutençao}
          alt="Profissionais especializados para cada necessidade"
          style={{ ...containerImageStyle, width: '100%', alignItems: 'center', position: 'relative', border: '0.5px solid black', // Define a borda com 5px de largura e cor preta
            borderRadius: '10px', }}
        />
      </div>






      


    

      <a href="#services" className={styles.ctaButton}> <p style={styles.neonText3}>
      <span style={styles.textoAzulSombraP2}><BlinkingText3 /></span>
        </p></a>

      {/* Conteúdo Dinâmico */}
      <section className={styles.dynamicContent}>
        <div className={styles.conteudo}>
          {contents.map((content, index) => (
            <article key={index} className={styles.article}>
              <p>{content.title}</p>
              <p>{content.body}</p>
              {content.link && (
                <a href={content.link} target="_blank" rel="noopener noreferrer">
                  Sobre nós
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <footer className={styles.footer}>
        <p style={{...styles.textoAzulSombra,     paddingBottom: '33px', marginBottom:'0px'
}}>&copy; {new Date().getFullYear()} - Infinity Technology</p>
      </footer>
    </div>
  );
};

export default Aplicativos;
