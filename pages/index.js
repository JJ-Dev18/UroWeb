import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/globalComponents/Cards';
import Swipper from '../components/globalComponents/Swipper';

import { Tarjeta } from '../components/globalComponents/Tarjeta';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <div className={styles.container}>
    
     </div>
      <div>
       <h1>Ultimo torneo </h1>
      <Swipper/>
      </div>
      <Card/>
    </>
  );
}
