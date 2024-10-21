import React, { useState, useEffect } from 'react';
import styles from '../styles/style.js'; // Importe os estilos do arquivo styles.js
import Design from '../assets/Design.png';
import banner from '../assets/banner.png';
import Identidade from '../assets/Identidade.png';

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
      fontSize: '0.9rem', 
      textAlign: 'center', 
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 1.0s ease' ,
      fontWeight: 'bold',
      display: 'inline-block', // Garante que o bloco não sublinhe espaços vazios

      

      
    }}>
      Venha planejar conosco!
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
      para destacar sua empresa
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
    identidade visual
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
      personalizados
    </span>
  );
};


const DesignGrafico = () => {
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
          <LetterByLetterText text="Design Gráfico" interval={100} />
        </p>
        <p style={styles.textoAzulSombraP}>
        Criamos soluções de design <span style={styles.neonText2}><BlinkingText4 /></span> e marca no mercado atual.
        </p>
      </div>

      <div className={styles.banner}>
      
        <p style={styles.textoAzulSombraP}>
        Nosso serviço inclui a criação de logotipos exclusivos, desenvolvimento de identidade visual para empresas e marcas.   </p>
      
        <p style={styles.textoAzulSombraP}>
        Com uma abordagem criativa e profissional, garantimos que cada elemento gráfico comunique sua mensagem de forma clara e impactante.       </p>
      
      </div>


      {/* Imagem com efeito de esmaecer */}
      <div
        style={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={Design}
          alt="Profissionais especializados para cada necessidade"
          style={{ ...containerImageStyle, width: '100%', alignItems: 'center', position: 'relative', border: '0.5px solid black', // Define a borda com 5px de largura e cor preta
            borderRadius: '10px', }}
        />
      </div>


      <div className={styles.banner}>
        <p style={styles.textoAzulSombra}>
          <LetterByLetterText text="Logotipos e Identidade Visual" interval={100} />
        </p>
        <p style={styles.textoAzulSombraP}>
        Desenvolvemos logotipos memoráveis, uma <span style={styles.neonText2}><BlinkingText5 /></span> coesa que reflete a personalidade e descreva o que deseja transparecer
        </p>
      </div>

    
      <div className={styles.banner}>
      
        <p style={styles.textoAzulSombraP}>
        Desde o conceito inicial até a execução final, trabalhamos para criar uma imagem que ressoe com seu público e fortaleça a presença da sua empresa no mercado.       </p>
        <p style={styles.textoAzulSombraP}>
        Oferecemos diversos pacotes personalizados de acordo com a sua necessidade.    
        </p>
      </div>


      {/* Imagem com efeito de esmaecer */}
      <div
        style={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={Identidade}
          alt="Profissionais especializados para cada necessidade"
          style={{ ...containerImageStyle, width: '100%', alignItems: 'center', position: 'relative', border: '0.5px solid black', // Define a borda com 5px de largura e cor preta
            borderRadius: '10px',
            }}
        />
      </div>


      <div className={styles.banner}>
        <p style={styles.textoAzulSombra}>
          <LetterByLetterText text="Banners e Overlays" interval={100} />
        </p>
        <p style={styles.textoAzulSombraP}>
        Design de banners e overlays, todos <span style={styles.neonText2}><BlinkingText6 /></span> para destacar sua presença online e em eventos.
        </p>
      </div>

      <div className={styles.banner}>
      
      <p style={styles.textoAzulSombraP}>
      Criamos visuais atraentes e funcionais que aumentam a visibilidade da sua marca e melhoram a experiência do usuário     </p>
      <p style={styles.textoAzulSombraP}>
      Seja em plataformas digitais ou para eventos físicos, damos todo suporte de design.  
      </p>
    </div>


      {/* Imagem com efeito de esmaecer */}
      <div
        style={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={banner}
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

export default DesignGrafico;
