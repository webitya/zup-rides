"use client"

export const dynamic = "force-dynamic"

import Header from "../../components/common/Header"
import AboutHero from "../../components/about/AboutHero"
import AboutValues from "../../components/about/AboutValues"
import Footer from "../../components/common/Footer"

export default function About() {
  return (
    <>
      <Header />
      <AboutHero />
      <AboutValues />
      <Footer />
    </>
  )
}
