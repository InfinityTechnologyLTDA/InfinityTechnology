import React, { useState } from 'react';
import styles from '../styles/style.js'; // Importe os estilos do arquivo styles.js

const Sobre = () => {
  const [contents, setContents] = useState([]); // Conteúdo dinâmico

  return (
    <div className={styles.container2}>
      {/* Cabeçalho */}
      <header className={styles.header}>
      
      </header>

      {/* Banner Principal */}
      <div className={styles.banner}>
        <p style={styles.textoAzulSombra}>Sobre!
        </p>
        <p style={styles.textoAzulSombraP}>Aqui, oferecemos suporte completo para suas necessidades de manutenção de computadores, desenvolvimento de sites e aplicativos. Nossa equipe de especialistas está pronta para ajudar a resolver problemas, otimizar seus sistemas e criar soluções personalizadas que atendam às suas necessidades específicas.</p>
        <a href="#services" className={styles.ctaButton}>Saiba Mais</a>
      </div>

      {/* Seção Sobre Nós */}
      <section id="about" className={styles.about}>
        <p>Sobre Nós</p>
        <p>Somos uma empresa dedicada a fornecer soluções tecnológicas de ponta para nossos clientes.</p>
      </section>

      {/* Seção de Serviços */}
      <section id="services" className={styles.services}>
        <p>Nossos Serviços</p>
        <div className={styles.serviceItem}>
          <p>Suporte de TI</p>
          <p>Oferecemos suporte técnico, manutenção de redes e segurança cibernética.</p>
        </div>
        <div className={styles.serviceItem}>
          <p>Criação de Sites</p>
          <p>Desenvolvimento de sites modernos e responsivos para sua empresa.</p>
        </div>
        <div className={styles.serviceItem}>
          <p>Desenvolvimento de Aplicativos</p>
          <p>Criação de aplicativos personalizados para Android e iOS.</p>
        </div>
      </section>

      {/* Conteúdo Dinâmico */}
      <section className={styles.dynamicContent}>
        <p>Últimas Notícias</p>
        <div className={styles.conteudo}>
          {contents.map((content, index) => (
            <article key={index} className={styles.article}>
              <p>{content.title}</p>
              <p>{content.body}</p>
              {content.link && (
                <a href={content.link} target="_blank" rel="noopener noreferrer">
                  Saiba mais
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} - Sua Empresa</p>
      </footer>
    </div>
  );
};

export default Sobre;
