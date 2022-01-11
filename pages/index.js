import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import styled from "styled-components"
import Hero from '../components/Hero';
import { GridProduct } from '../components/GridProduct';

/*
<Image
        src="/images/coffee.jpg"
        alt="Picture of the author"
        width={2500}
        height={1700}
      />
      */

const Wrapper = styled.div`
      z-index: 1;
      position: fixed;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coffe</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Licorice&family=Questrial&display=swap" rel="stylesheet" />
      </Head>
      <Wrapper>
        <Header />
      </Wrapper>
      <div className='absolute mt-16 sm:mt-24 md:mt-28 lg:mt-52 xl:mt-80'>
        <div className='grid grid-cols-2 gap-14'>
          <h1 className='capitalize font-licorice text-center text-4xl ml-0 lg:ml-8 sm:text-5xl lg:text-7xl xl:text-9xl'>El mejor Cafe de Nicaragua</h1>
        </div>
      </div>
      <img className="object-cover" src="/images/coffee.jpg" alt="Picture of the author" width={2500} height={1700} />
      <Hero />
      <GridProduct />
    </div>
  )
}
