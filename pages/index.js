import Head from 'next/head'
import Header from '../Components/Header'
import Wrapper from '../Components/Wrapper'
import React from 'react'
import styled from 'styled-components'
import Intro from '../Components/Intro'
import HowItWOrks from '../Components/HowItWorks'
import Squares from '../Components/Squares'
import Portfolio from '../Components/Portfolio'



const Layout = styled.section`
background: #6C6E88;


`


export default function Home() {
  return (

    <>

      <div className="wrapper">
        <Wrapper />
      </div>

      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <Header />



      </div>

      <Intro />
      <HowItWOrks />
      <Squares />
      <Portfolio />


    </>

  )
}
