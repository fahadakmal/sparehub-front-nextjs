import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SellerProfile from './SellerProfile'
import { Login } from './views/Login'
// const { i18n } = require('./config/i18next');
import './config/i18next';
const Home: NextPage = () => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel='stylesheet/css' href='App.css'/>
        <link rel="icon" href="/favicon.ico" />
        fonts==================
<link rel="preconnect" href="https://fonts.googleapis.com" />
 <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,500;0,700;1,400;1,500;1,700&family=Prompt:wght@100&display=swap" rel="stylesheet" />
      </Head>
{/* {i18n && */}
      <Login/>
      {/* } */}
    </div>
  )
}

export default Home
