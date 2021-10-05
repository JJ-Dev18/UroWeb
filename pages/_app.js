import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layouts'
import '../styles/globals.css'
import {theme} from '../styles/GlobalStyles'
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>

    </ThemeProvider>
  );
}

export default MyApp
