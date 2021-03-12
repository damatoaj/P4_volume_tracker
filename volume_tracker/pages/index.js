import {useState} from 'react';

import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Header from '../pages/partials/Header';
import Footer from '../pages/partials/Footer';

import About from '../pages/components/About';
import Form from '../pages/components/Form';
 

export default function Home() {
  const[currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = user => {
    console.log("handling authentication...")
    if(user) {
      setCurrentUser(user);
      setIsAuthenticated(true);
    } else {
      setCurrentUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('jwtToken');
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Volume Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header 
        currentUser={currentUser}
        handleAuth={handleAuth}
      />
      <About />
      <Form 
        currentUser={currentUser}
        isAuthenticated={isAuthenticated}
        handleAuth={handleAuth}
      />
      <Footer />
    </div>
  )
}
