import React from "react";
import Head from 'next/head'
import Navbar from './/components/Navbar'
import MainDesc from './/components/MainDesc'
import SubDesc from './/components/SubDesc'
import SubFooter from './/components/SubFooter'
import Footer from './/components/Footer'
import LinkForm from './components/LinkForm'

 
export default function Home() {
  
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar/>
      <MainDesc/>
      <LinkForm/>
      <SubDesc/>
      <SubFooter/>
      <Footer/>
    </>
  )
}
