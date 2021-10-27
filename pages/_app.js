import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layouts'
import '../styles/globals.css'
import {theme} from '../styles/GlobalStyles'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeProvider theme={theme}>
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>

    </ThemeProvider>
  );
}

export default MyApp
