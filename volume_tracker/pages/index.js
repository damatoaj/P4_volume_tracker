import {useState} from 'react';

import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Header from '../pages/partials/Header';
import Footer from '../pages/partials/Footer';

import About from '../pages/components/About';
import Content from './components/Content';
 

export default function Home() {
  const[currentUser, setCurrentUser] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  const handleAuth = user => {
    console.log("handling authentication...")
    if(user) {
      setCurrentUser(user);
      setIsAuthenticated(true);
    } else {
      setCurrentUser(null);
      setIsAuthenticated(false);
      // localStorage.removeItem('jwtToken');
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
      <Content 
        setCurrentUser={setCurrentUser}
        isAuthenticated={isAuthenticated}
        handleAuth={handleAuth}
        token={token}
        setToken={setToken}
      />
      <Footer />
    </div>
  )
}
