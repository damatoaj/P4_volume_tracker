import Head from 'next/head';
import styles from '../styles/Home.module.css';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';

import Header from '../pages/partials/Header';
import Footer from '../pages/partials/Footer';

import About from '../pages/components/About';
import Form from '../pages/components/Form';
 

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Volume Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About />
      <Form />
      <Footer />
    </div>
  )
}
