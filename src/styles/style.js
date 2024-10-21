const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column', // Altera a direção do flex para coluna
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#333',
    position: 'relative',
    paddingBottom: '50px',
    borderRadius: '1%',
    gap: '20px',
    /* Diminuir tamanho da barra de rolagem */
    scrollbarWidth: 'thin', // Firefox
    '&::-webkit-scrollbar': {
      width: '6px', // WebKit Browsers (Chrome, Safari)
    },
    
  },

  container2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#ffffff',
    position: 'relative',
    paddingBottom: '50px',
    top: '25%',
    maxWidth: '100%',
    gap: '20px',
    padding: '0px',
    borderRadius: '1%',
    width: '100vw',
    overflow: 'auto',
    margin: '20px',
    /* Barra de rolagem sobreposta */
    scrollbarWidth: 'none', // Firefox: Oculta a barra de rolagem padrão
    '&::-webkit-scrollbar': {
      width: '0', // WebKit Browsers (Chrome, Safari): Oculta a barra de rolagem padrão
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      width: '6px', // Largura da barra de rolagem personalizada
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Cor da barra de rolagem
      borderRadius: '10px',
    },
  },

  container3: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#ffffff',
    position: 'relative',
    paddingBottom: '50px',
    top: '25%',
    maxWidth: '100%',
    gap: '20px',
    padding: '0px',
    borderRadius: '1%',
    width: '100vw',
    margin: '20px',
    /* Barra de rolagem sobreposta */
    scrollbarWidth: 'none', // Firefox: Oculta a barra de rolagem padrão
    '&::-webkit-scrollbar': {
      width: '0', // WebKit Browsers (Chrome, Safari): Oculta a barra de rolagem padrão
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      width: '6px', // Largura da barra de rolagem personalizada
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Cor da barra de rolagem
      borderRadius: '10px',
    },
  },

 

  textoAzulSombraP: {
    color: 'black',
    textShadow: '2px 2px 4px #aaa',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    textAlign: 'center',
    margin: '10px',
    position: 'relative',
    padding: '10px',
    overflow: 'auto',
  },

  textoAzulSombraP0: {
    color: 'black',
    textShadow: '5px 3px 3px #aaa',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    textAlign: 'center',
    margin: '10px',
    position: 'relative',
    padding: '10px',
    overflow: 'auto',
    textShadow: `
      0 0 3px #fff,
      0 0 7px #fff,
      0 0 7px #fff,
      0 0 7px #fff,
      0 0 3px #fff,
      0 0 3px #fff,
      0 0 3px #fff
    `,
  },

  

  textoAzulSombraP2: {
    color: 'black',
    textShadow: '2px 2px 4px #aaa',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    textAlign: 'center',
    margin: '10px',
    position: 'relative',
    padding: '10px',
    overflow: 'auto',
    textShadow: `
    0 0 3px #4ADBFF,
    0 0 7px #4ADBFF,
    0 0 7px #4ADBFF,
    0 0 7px #4ADBFF,
    0 0 3px #4ADBFF,
    0 0 3px #4ADBFF,
    0 0 3px #4ADBFF
  `,
  },



  textoAzulSombra: {
    color: '#000',
    textShadow: '2px 2px 6px #000',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    textAlign: 'center',
    margin: '30px',
    position: 'relative',
    height:'auto',
    marginTop:'25px'
  },
  

  neonText: {
    color: '#fff', // Cor do texto
    fontSize: '0.9rem', // Ajuste conforme necessário
    textAlign: 'center',
    position: 'relative',
    textShadow: `
      0 0 3px #FF00F9,
      0 0 7px #FF00F9,
      0 0 7px #FF00F9,
      0 0 7px #FF00F9,
      0 0 3px #FF00F9,
      0 0 3px #FF00F9,
      0 0 3px #FF00F9
    `,
    animation: 'neonBlink 1.0s infinite alternate', // Animação de piscar
  },

  neonText2: {
    color: '#000', // Cor do texto
    fontSize: '0.9rem', // Ajuste conforme necessário
    textAlign: 'center',
    position: 'relative',
    textShadow: `
      0 0 3px #4ADBFF,
      0 0 7px #4ADBFF,
      0 0 7px #4ADBFF,
      0 0 7px #4ADBFF,
      0 0 3px #4ADBFF,
      0 0 3px #4ADBFF,
      0 0 3px #4ADBFF
    `,
    animation: 'neonBlink 1.0s infinite alternate', // Animação de piscar
  },

  neonText3: {
    color: '#000', // Cor do texto
    fontSize: '1.2rem', // Ajuste conforme necessário
    textAlign: 'center',
    position: 'relative',
    textShadow: `
      0 0 3px #4ADBFF,
      0 0 7px #4ADBFF,
      0 0 7px #4ADBFF,
      0 0 7px #4ADBFF,
      0 0 3px #4ADBFF,
      0 0 3px #4ADBFF,
      0 0 3px #4ADBFF
    `,
    animation: 'neonBlink 1.0s infinite alternate', // Animação de piscar
  },


  logo: {
    maxWidth: '9.0%',
    minWidth: '150px',
    position: 'absolute',
    top: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    transition: 'transform 0.3s ease, max-width 0.3s ease',
  },

  Textos1: {
    size: '10',
    color: '#FFFFFF',
  },

  IconWhatsApp: {
    maxWidth: '6%',
    minWidth: '75px',
    position: 'absolute',
    top: '40px',
    left: '90%',
    transform: 'translateX(-50%)',
    margin: '5px',
    cursor: 'pointer',
  },

  OrdemStyle: {
    maxWidth: '4%',
    minWidth: '60px',
    position: 'absolute',
    top: '40px',
    left: '50%',
    transform: 'translateX(-30%)',
    margin: '10px',
    cursor: 'pointer',
  },

  PosiçaoContainerMenu: {
    position: 'absolute',
    left: '48%',
    border: '1px solid #000',
  },

  menu: {
    position: 'relative', // Posiciona o menu de forma absoluta
    top: '25%', // Define a posição superior para 0
    right: '0', // Define a posição direita para 0
    display: 'flex', // Usa flexbox para layout dos itens do menu
    gap: '10px', // Espaçamento entre os itens do menu
    transform: 'translateX(-50%)', // Ajusta o alinhamento horizontal
    left: '50.2%', // Centraliza horizontalmente
    flexDirection: 'row', // Itens alinhados em linha
    flexWrap: 'wrap', // Permite quebra de linha
    justifyContent: 'space-around', // Distribui os itens de forma mais uniforme
    minWidth: '100%',
    padding: '0px',
    
  },

  menuItem: {
    cursor: 'pointer', // Adiciona o cursor de pointer para os itens do menu
    padding: '8px', // Adiciona padding aos itens do menu
    backgroundColor: '#fff', // Cor de fundo dos itens do menu
    color: 'black', // Cor do texto dos itens do menu
    borderRadius: '7px', // Bordas arredondadas dos itens do menu
    transition: 'background-color 1s', // Transição suave da cor de fundo
    position: 'relative',
    boxShadow: '1px 10px 20px #000',
    width: '150px', // Largura fixa para todos os itens do menu
    textAlign: 'center', // Alinha o texto para o centro do menu
    minWidth: '150px', // Define uma largura mínima para os itens do menu
    minHeight: '20px', // Define uma altura mínima para os itens do menu
    marginBottom: '10px', // Reduz o espaço entre as linhas do menu
    marginLeft: '2px', // Ajuste a margem esquerda dos itens do menu conforme necessário
    marginRight:'2px',
    right:'1.5%',
    textShadow: `
    0 0 15px #fff,
    0 0 1px #000,
    0 0 7px #fff,
    0 0 7px #fff,
    0 0 3px #fff,
    0 0 3px #fff,
    0 0 3px #fff
  `,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize:'13px'
  },

  DivProjetos:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    
    
    
    
      },

  banner: {
    width: '100%',
    padding: '40px 20px',
    background: 'linear-gradient(45deg, #00aaff, #ff007f)',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },

  menuItemHover: {
    backgroundColor: '#4ADBFF',
  },

  mediaQueries: {
    container: {
      flexDirection: 'column',
      padding: '20px',
    },

    imageContainer: {
      position: 'relative',
      width: '100%',
      height: 'auto',
      overflow: 'hidden',
      marginTop: '20px', // Ajuste conforme necessário
      transition: 'opacity 0.5s ease',
      

    },
    image: {
      width: '100%',
      height: 'auto',
      transition: 'opacity 0.5s ease',
    },
    hoverEffect: {
      opacity: 0.8,
    },
  },

  // Adiciona a classe para o texto que pisca
  fadeBlinkText: {
    animation: 'fadeBlink 1.5s infinite', // Define a animação para repetir infinitamente com duração de 1.5s
  },

  '@keyframes fadeBlink': {
    '0%': {
      opacity: 1,
    },
    '50%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
};

export default styles;
