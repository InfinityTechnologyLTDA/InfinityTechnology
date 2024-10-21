import React, { useState, useEffect } from 'react';
import styles from '../styles/style.js'; // Importe os estilos do arquivo styles.js
import services from '../assets/services.png';
import SuporteTecnico from '../assets/SuporteTecnico.png';
import Designgrafico from '../assets/Designgrafico.png'
import DesenvolvimentoWeb from '../assets/DesenvolvimentoWeb.png';
import DesenvolvimentoAplicativos from '../assets/DesenvolvimentoAplicativos.png';
import MarketingDigital from '../assets/MarketingDigital.png';
import ConsultoriaTi from '../assets/ConsultoriaTi.png';


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
      fontSize: '0.9rem', 
      textAlign: 'center', 
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.9s ease' 
    }}>
      serviços de tecnologia
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
      Estamos à disposição!
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
      Formatação e limpeza
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
      manutenção preventiva
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
      Resolução de problemas
    </span>
  );
};

const BlinkingText7 = () => {
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
       identidade visual da marca
    </span>
  );
};


const BlinkingText8 = () => {
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
       banners, flyers, cartões de visita
    </span>
  );
};

const BlinkingText9 = () => {
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
       apresentações visuais
    </span>
  );
};

const BlinkingText10 = () => {
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
      apresentam a empresa
    </span>
  );
};

const BlinkingText11 = () => {
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
      Registros Empresariais
    </span>
  );
};


const BlinkingText12 = () => {
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
      Serviços contínuos
    </span>
  );
};


const BlinkingText13 = () => {
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
     apps para Android e iOS
    </span>
  );
};


const BlinkingText14 = () => {
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
     aplicativos
    </span>
  );
};

const BlinkingText15 = () => {
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
      gestão de perfis
    </span>
  );
};

const BlinkingText16 = () => {
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
   Campanhas
    </span>
  );
};

const BlinkingText17 = () => {
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
   Monitoramento e análise
    </span>
  );
};


const BlinkingText18 = () => {
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
    Ajudamos as empresas
    </span>
  );
};

const BlinkingText19 = () => {
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
   medidas de segurança
    </span>
  );
};

const BlinkingText20 = () => {
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
   Instalação e suporte
    </span>
  );
};

const Serviços = () => {
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
          <LetterByLetterText text="Serviços" interval={100} />
        </p>
        <p style={styles.textoAzulSombraP}>
          Oferecemos a você diversos <span style={styles.neonText2}><BlinkingText /></span>, veja por completo abaixo!
        </p>
      </div>


      {/* Imagem com efeito de esmaecer */}
      <div
        style={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={services}
          alt="Profissionais especializados para cada necessidade"
          style={{ ...containerImageStyle, width: '100%', alignItems: 'center', position: 'relative', border: '0.5px solid black', // Define a borda com 5px de largura e cor preta
            borderRadius: '10px', }}
        />
      </div>


      <p style={styles.textoAzulSombra}>
          <LetterByLetterText text="Suporte Técnico" interval={100} />
        </p>

      <p style={styles.textoAzulSombraP}>
        Fazemos reparos em até 3 dias, <span style={styles.neonText2}><BlinkingText4 /></span> de computadores e notebooks.
      </p>

      <p style={styles.textoAzulSombraP}>
      Manutenção de Equipamentos, <span style={styles.neonText2}><BlinkingText5 /></span> e corretiva, e outros reparos.
      </p>

      <p style={styles.textoAzulSombraP}>
      Suporte Técnico Remoto: <span style={styles.neonText2}><BlinkingText6 /></span> técnicos sem sair de casa
      </p>

       {/* Imagem com efeito de esmaecer */}
       <div
        style={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={SuporteTecnico}
          alt="Profissionais especializados para cada necessidade"
          style={{ ...containerImageStyle, width: '100%', alignItems: 'center', position: 'relative', justifyContent:'center', border: '0.5px solid black', // Define a borda com 5px de largura e cor preta
            borderRadius: '10px', }}
        />
      </div>


      <p style={styles.textoAzulSombra}>
          <LetterByLetterText text="Design Gráfico" interval={100} />
        </p>

      <p style={styles.textoAzulSombraP}>
      Criação de Identidade Visual: Criamos a <span style={styles.neonText2}><BlinkingText7 /></span> , incluindo cores, tipografia, e outros elementos.
      </p>

      <p style={styles.textoAzulSombraP}>
      Design de Materiais Publicitários: <span style={styles.neonText2}><BlinkingText8 /></span> , e outros materiais promocionais.
      </p>

      <p style={styles.textoAzulSombraP}>
      Design de Apresentações Corporativas:<span style={styles.neonText2}><BlinkingText9 /></span>  profissionais para reuniões e eventos.
      </p>

       {/* Imagem com efeito de esmaecer */}
       <div
        style={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={Designgrafico}
          alt="Profissionais especializados para cada necessidade"
          style={{ ...containerImageStyle, width: '100%', alignItems: 'center', position: 'relative', justifyContent:'center',
            border: '0.5px solid black', // Define a borda com 5px de largura e cor preta
            borderRadius: '10px',
           }}
        />
      </div>


      <p style={styles.textoAzulSombra}>
          <LetterByLetterText text="Desenvolvimento Web" interval={100} />
        </p>

      <p style={styles.textoAzulSombraP}>
      Criação de Sites Institucionais: Sites que <span style={styles.neonText2}><BlinkingText10 /></span>, seus serviços e informações de contato.
      </p>

      <p style={styles.textoAzulSombraP}>
      Desenvolvimento de E-commerce: Lojas, <span style={styles.neonText2}><BlinkingText11 /></span> incluindo integração com sistemas de pagamento.
      </p>

      <p style={styles.textoAzulSombraP}>
      Manutenção e Atualização de Sites: alguns <span style={styles.neonText2}><BlinkingText12 /></span> para manter o site atualizado e funcionando corretamente.
      </p>

    

       {/* Imagem com efeito de esmaecer */}
       <div
        style={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={DesenvolvimentoWeb}
          alt="Profissionais especializados para cada necessidade"
          style={{ ...containerImageStyle, width: '100%', alignItems: 'center', position: 'relative', justifyContent:'center', border: '0.5px solid black', // Define a borda com 5px de largura e cor preta
            borderRadius: '10px', }}
        />
      </div>


      <p style={styles.textoAzulSombra}>
          <LetterByLetterText text="Desenvolvimento de Aplicativos" interval={100} />
        </p>

      <p style={styles.textoAzulSombraP}>
      Aplicativos Mobile: Desenvolvemos <span style={styles.neonText2}><BlinkingText13 /></span>, focados em diferentes necessidades empresariais.
      </p>

      <p style={styles.textoAzulSombraP}>
      Aplicativos Web: Criação e manutenção de  <span style={styles.neonText2}><BlinkingText14 /></span>  que funcionam diretamente no navegador.
      </p>

  

       {/* Imagem com efeito de esmaecer */}
       <div
        style={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={DesenvolvimentoAplicativos}
          alt="Profissionais especializados para cada necessidade"
          style={{ ...containerImageStyle, width: '100%', alignItems: 'center', position: 'relative', justifyContent:'center', border: '0.5px solid black', // Define a borda com 5px de largura e cor preta
            borderRadius: '10px', }}
        />
      </div>


      <p style={styles.textoAzulSombra}>
          <LetterByLetterText text="Marketing Digital" interval={100} />
        </p>

      <p style={styles.textoAzulSombraP}>
      Gestão de Redes Sociais: Criação de conteúdo e <span style={styles.neonText2}><BlinkingText15 /></span> em redes sociais como Instagram, Facebook, e LinkedIn.
      </p>

      <p style={styles.textoAzulSombraP}>
      Criação e Gestão de Campanhas Publicitárias:<span style={styles.neonText2}><BlinkingText16 /></span> no Google Ads, Facebook Ads, Instagram e outras plataformas.
      </p>

      <p style={styles.textoAzulSombraP}>
      Análise de Métricas e Relatórios: fazemos <span style={styles.neonText2}><BlinkingText17 /></span>  de dados de campanhas para otimização.
      </p>


       {/* Imagem com efeito de esmaecer */}
       <div
        style={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={MarketingDigital}
          alt="Profissionais especializados para cada necessidade"
          style={{ ...containerImageStyle, width: '100%', alignItems: 'center', position: 'relative', justifyContent:'center',
            border: '0.5px solid black', // Define a borda com 5px de largura e cor preta
            borderRadius: '10px',
           }}
        />
      </div>


      <p style={styles.textoAzulSombra}>
          <LetterByLetterText text="Consultoria em TI" interval={100} />
        </p>

   
        <p style={styles.textoAzulSombraP}>
      Configuração e Suporte de Infra Ti: fazemos <span style={styles.neonText2}><BlinkingText20 /></span>  para servidores, redes, e outros sistemas de TI.
      </p>

      <p style={styles.textoAzulSombraP}>
      Segurança da Informação: implementar as <span style={styles.neonText2}><BlinkingText19 /></span> para proteger dados e informações sensíveis das empresas.
      </p>

      <p style={styles.textoAzulSombraP}>
      Consultoria em Transformação Digital: <span style={styles.neonText2}><BlinkingText18 /></span>  a adotarem tecnologias digitais em suas operações.
      </p>

       {/* Imagem com efeito de esmaecer */}
       <div
        style={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={ConsultoriaTi}
          alt="Profissionais especializados para cada necessidade"
          style={{ ...containerImageStyle, width: '100%', alignItems: 'center', position: 'relative', justifyContent:'center', border: '0.5px solid black', // Define a borda com 5px de largura e cor preta
            borderRadius: '10px', }}
        />
      </div>

      {/* Seção Sobre Nós */}
      <section id="about" className={styles.about}>
        <p style={styles.textoAzulSombraP}>
          Somos uma empresa dedicada a fornecer soluções tecnológicas personalizadas e de ponta para nossos clientes.
        </p>
      </section>


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

export default Serviços;
