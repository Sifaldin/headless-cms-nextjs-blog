import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.scss';
import 'highlight.js/styles/dracula.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faList,
  faBorderAll,
  faSortNumericDown,
  faSortNumericUp,
  faSun,
  faMoon
} from '@fortawesome/free-solid-svg-icons';
import "react-toggle/style.css";
import ThemeProvider from 'providers/ThemeProvider';


config.autoAddCss = false;
library.add(
  faSun,
  faMoon,
  faList,
  faBorderAll,
  faSortNumericDown,
  faSortNumericUp);

export default function MyApp({ Component, pageProps }) {
  return (<ThemeProvider>
          <Component {...pageProps} />
         </ThemeProvider>)
}
