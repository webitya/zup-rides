import Header from "@/components/common/Header"
import AboutHero from "@/components/about/AboutHero"
import AboutValues from "@/components/about/AboutValues"
import Footer from "@/components/common/Footer"

export const metadata = {
  title: "About ZupRides - Your Trusted Rental Partner in Ranchi",
  description: "Learn about ZupRides, Ranchi's most trusted bike and car rental service with top-quality vehicles.",
}

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
