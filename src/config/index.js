import isMobile from 'utils/isMobile';

/* set your data here */
const email = 'Lichiii@pm.me';
const domain = 'copade.gob.ar'
/* ***************** */

const repository = 'https://www.copade.gob.ar/';

const messages = {
  app: {
    crash: {
      title: 'Lo sentimos, algo salió mal, puedes hacer lo siguiente:',
      options: {
        email: `Contactarte con nosotros: ${email}`,
        reset: 'Tocar aquí para reinicar la app',
      },
    },
  },
  loader: {
    fail: 'Mmm, algo no está funcionando... Prueba de nuevo más tarde',
  },
  images: {
    failed: 'something went wrong during image loading :(',
  },
  404: 'Hola! ¿Qué estás buscando?',
};

const copyright = {
  title: 'copyright © ',
  link: domain,
};

const themes = {
  light: {
    palette: {
      type: 'light',
      background: {
        default: '#fafafa',
        paper: '#fff',
      },
      primary: {
        light: '#7986cb',
        main: '#3f51b5',
        dark: '#303f9f',
        contrastText: '#fff',
      },
    },
  },

  dark: {
    palette: {
      type: 'dark',
      background: {
        default: '#111',
        paper: '#171717',
      },
      primary: {
        light: '#7986cb',
        main: '#333',
        dark: '#303f9f',
        contrastText: '#fff',
      },
    },
  },
};

const cancelationMessage = 'operation is manually canceled';

const dateFormat = 'DD MMMM, YYYY';

const title = 'Ecoacciones';

const themePair = ['dark', 'light'];

const notifications = {
  options: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    autoHideDuration: 3000,
  },
  maxSnack: isMobile ? 3 : 4,
};

const loader = {
  // no more blinking in your app
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

const giphy404 = 'https://giphy.com/embed/xTiN0L7EW5trfOvEk0';

export {
  messages,
  cancelationMessage,
  dateFormat,
  copyright,
  email,
  domain,
  repository,
  loader,
  title,
  themePair,
  giphy404,
  notifications,
  themes,
};
