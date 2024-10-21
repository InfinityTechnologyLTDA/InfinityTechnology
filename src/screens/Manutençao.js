import React, { useState, useEffect } from 'react';
import styles from '../styles/style.js'; // Importe os estilos do arquivo styles.js
import Personalizado from '../assets/Personalizado.png';
import Manutencao from '../assets/Manutencao.png';
import Promocao from '../assets/Promocao.png';


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
      Faça seu orçamento! Contate-nos.
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
      computadores, notebooks
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
      trabalhos, estudos ou jogos
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
      todos os meses
    </span>
  );
};


const Manutençao = () => {
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
          <LetterByLetterText text="Manutenção" interval={100} />
        </p>
        <p style={styles.textoAzulSombraP}>
        Realizamos manutenção e melhorias de <span style={styles.neonText2}><BlinkingText4 /></span>  e alguns modelos de celulares, garantindo o ótimo funcionamento e aprimoramento dos seus dispositivos.
        </p>
      </div>

      <div className={styles.banner}>
      
       
        <p style={styles.textoAzulSombraP}>
        Desde limpeza interna e ajustes técnicos até atualizações de hardware, cuidamos de todos os detalhes para garantir a performance e longevidade dos seus dispositivos.        </p>
      
      </div>

      

      {/* Imagem com efeito de esmaecer */}
      <div
        style={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={Manutencao}
          alt="Profissionais especializados para cada necessidade"
          style={{ ...containerImageStyle, width: '100%', alignItems: 'center', position: 'relative',border: '0.5px solid black', // Define a borda com 5px de largura e cor preta
            borderRadius: '10px', }}
        />
      </div>





      <div className={styles.banner}>
        <p style={styles.textoAzulSombra}>
          <LetterByLetterText text="Projetos Personalizados de Ambientes" interval={100} />
        </p>
        <p style={styles.textoAzulSombraP}>
        Projetamos ambientes personalizados para <span style={styles.neonText2}><BlinkingText5 /></span>, adaptando a configuração do seu computador às suas necessidades específicas.
        </p>
      </div>

      
      <div className={styles.banner}>
      
        <p style={styles.textoAzulSombraP}>
        Seja para um escritório produtivo, um espaço de estudo eficiente ou uma estação de jogos imersiva       </p>
        <p style={styles.textoAzulSombraP}>
        Criamos soluções personalizadas para melhorar sua experiência e conforto.        </p>
      </div>


      {/* Imagem com efeito de esmaecer */}
      <div
        style={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={Personalizado}
          alt="Profissionais especializados para cada necessidade"
          style={{ ...containerImageStyle, width: '100%', alignItems: 'center', position: 'relative', border: '0.5px solid black', // Define a borda com 5px de largura e cor preta
            borderRadius: '10px', }}
        />
      </div>






      <div className={styles.banner}>
        <p style={styles.textoAzulSombra}>
          <LetterByLetterText text="Promoções Mensais e Benefícios para Parceiros" interval={100} />
        </p>
        <p style={styles.textoAzulSombraP}>
        Aproveite nossas promoções especiais <span style={styles.neonText2}><BlinkingText6 /></span> , especialmente para nossos parceiros.
        </p>
      </div>

      <div className={styles.banner}>
      
      <p style={styles.textoAzulSombraP}>
      Estamos sempre prontos para oferecer condições vantajosas para manutenção, limpeza e upgrades.       </p>
      <p style={styles.textoAzulSombraP}>
      Se você é um parceiro, pode contar com ofertas exclusivas que proporcionam economia e vantagens adicionais para o cuidado e aprimoramento dos seus equipamentos.   </p>
    </div>


      {/* Imagem com efeito de esmaecer */}
      <div
        style={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={Promocao}
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

export default Manutençao;
