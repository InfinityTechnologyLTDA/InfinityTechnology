import React, { useState, useEffect } from 'react';
import styles from '../styles/style.js'; // Importe os estilos do arquivo styles.js
import Profissionais1 from '../assets/Profissionais1.png';
import Profissionais2 from '../assets/Profissionais2.png';

// Componente que exibe um texto letra por letra
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

  return <span>{displayedText}</span>;
};

// Componente que exibe um texto piscante
const BlinkingText = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(prevIsVisible => !prevIsVisible);
    }, 1000); // Alterna a visibilidade a cada 1000 ms (1 segundo)

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <span
      style={{
        color: '#000',
        fontSize: '0.9rem',
        textAlign: 'center',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.9s ease'
      }}
    >
      suporte completo
    </span>
  );
};

// Componente que exibe um texto piscante
const BlinkingText2 = () => {
  const [isVisible2, setIsVisible2] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible2(prevIsVisible => !prevIsVisible);
    }, 1000); // Alterna a visibilidade a cada 1000 ms (1 segundo)

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <span
      style={{
        color: '#000',
        fontSize: '0.9rem',
        textAlign: 'center',
        opacity: isVisible2 ? 1 : 0,
        transition: 'opacity 0.9s ease'
      }}
    >
      Especialistas
    </span>
  );
};

// Componente que exibe um texto piscante
const BlinkingText3 = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(prevIsVisible => !prevIsVisible);
    }, 1000); // Alterna a visibilidade a cada 1000 ms (1 segundo)

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <span
      style={{
        color: '#000',
        fontSize: '1.2rem',
        textAlign: 'center',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1.0s ease',
        fontWeight: 'bold',
        display: 'inline-block' // Garante que o bloco não sublinhe espaços vazios
      }}
    >
      Contate-nos
    </span>
  );
};

// Componente principal da página inicial
const Home = () => {
  const [contents, setContents] = useState([]); // Conteúdo dinâmico
  const [isHovered, setIsHovered] = useState(false);

  // Rola para o topo da página ao montar o componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Este useEffect garante que a página role para o topo quando o componente Home for montado

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
          <LetterByLetterText text="Seja Bem-vindo!" interval={100} />
        </p>
        <p style={styles.textoAzulSombraP}>
          Oferecemos a todos os nossos clientes um{' '}
          <span style={styles.neonText2}>
            <BlinkingText />
          </span>{' '}
          para suas necessidades de manutenção de computadores. Desenvolvemos sites e aplicativos.
        </p>
      </div>

      {/* Imagem com efeito de esmaecer */}
      <div
        style={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={Profissionais1}
          alt="Profissionais especializados para cada necessidade"
          style={{
            ...containerImageStyle,
            width: '100%',
            alignItems: 'center',
            position: 'relative',
            border: '0.5px solid black', // Define a borda com 0.5px de largura e cor preta
            borderRadius: '10px',
          }}
        />
      </div>

      <p style={styles.textoAzulSombraP}>
        Nossa equipe eficiente contém, para cada área,{' '}
        <span style={styles.neonText2}>
          <BlinkingText2 />
        </span>{' '}
        prontos para ajudar a resolver problemas, otimizar seus sistemas e criar soluções personalizadas que atendam às suas necessidades específicas.
      </p>

      {/* Segunda Imagem com efeito de esmaecer */}
      <div
        style={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={Profissionais2}
          alt="Profissionais especializados para cada necessidade"
          style={{
            ...containerImageStyle,
            width: '100%',
            alignItems: 'center',
            position: 'relative',
            justifyContent: 'center',
            border: '0.5px solid black', // Define a borda com 0.5px de largura e cor preta
            borderRadius: '10px',
          }}
        />
      </div>

      {/* Seção Sobre Nós */}
      <section id="about" className={styles.about}>
        <p style={styles.textoAzulSombraP}>
          Somos uma empresa dedicada a fornecer soluções tecnológicas personalizadas e de ponta para nossos clientes.
        </p>
      </section>

      <a href="#services" className={styles.ctaButton}>
        <p style={styles.neonText3}>
          <span style={styles.textoAzulSombraP2}>
            <BlinkingText3 />
          </span>
        </p>
      </a>

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
        <p
          style={{
            ...styles.textoAzulSombra,
            paddingBottom: '33px',
            marginBottom: '0px',
          }}
        >
          &copy; {new Date().getFullYear()} - Infinity Technology
        </p>
      </footer>
    </div>
  );
};

export default Home;