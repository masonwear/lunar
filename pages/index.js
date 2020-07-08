import Head from 'next/head'
import Header from '../Components/Header'
import Wrapper from '../Components/Wrapper'
import react from 'react'
import styled from 'styled-components'
import Intro from '../Components/Intro'

const Layout = styled.section`
background: #6C6E88;


`


export default function Home() {
  return (
    
   <>
   
   <div className="wrapper">
    <Wrapper/>
    </div>
   
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     

      <Header/>

      
      
    </div>

    <Intro></Intro>
    
    </>
    
  )
}
