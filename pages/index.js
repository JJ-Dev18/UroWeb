import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/globalComponents/Cards';
import Swipper from '../components/globalComponents/Swipper';

import { Tarjeta } from '../components/globalComponents/Tarjeta';
import styles from '../styles/Home.module.css'

export default function Home(props) {
  
  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <div className={styles.container}>
    
     </div>
      <div style={{position:'relative'}}>
       <h1>Ultimo torneo </h1>
      <Swipper/>
      </div>
      <Card/>
    </>
  );
}

export async function getStaticProps({locale}) {
  const response = await import(`../lang/${locale}.json`);
  
  return {
    props: {
      enlaces: response.default.header.enlaces,
      showHeader: false,
    }, // will be passed to the page component as props
  };
}
