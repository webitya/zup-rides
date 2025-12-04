import Header from "@/components/common/Header"
import HomepageHero from "@/components/homepage/HomepageHero"
import HomepageCTA from "@/components/homepage/HomepageCTA"
import FeaturedVehicles from "@/components/homepage/FeaturedVehicles"
import Features from "@/components/homepage/Features"
import Testimonials from "@/components/homepage/Testimonials"
import Newsletter from "@/components/homepage/Newsletter"
import Footer from "@/components/common/Footer"

export const metadata = {
  title: "ZupRides - Bike & Car Rentals in Ranchi from ₹299",
  description:
    "Rent bikes and scooters in Ranchi, Jharkhand from just ₹299. Affordable, flexible rental plans with free helmets and transparent pricing.",
  keywords: "bike rental Ranchi, scooty rental, car rental Ranchi, vehicle hire Jharkhand",
  openGraph: {
    title: "ZupRides - Bike & Car Rentals in Ranchi",
    description: "Best bike and car rental service in Ranchi starting from ₹299",
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <HomepageHero />
      <HomepageCTA />
      <FeaturedVehicles />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  )
}
