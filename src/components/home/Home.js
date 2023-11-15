import React from 'react'
import Header from './header'
import Footer from './footer';
import Hero from './/hero'
import Body from './body'

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <Hero />
    </main>

    <Body />

    <Footer />
    </>
  )
}
