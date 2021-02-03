import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.scss';
import 'highlight.js/styles/dracula.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faList, faBorderAll } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(faList, faBorderAll)

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
