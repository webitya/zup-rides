import Header from "../../components/common/Header"
import ContactForm from "../../components/contact/ContactForm"
import ContactInfo from "../../components/contact/ContactInfo"
import Footer from "../../components/common/Footer"

export const metadata = {
  title: "Contact ZupRides - Get in Touch with Our Team",
  description: "Contact ZupRides for bike and car rentals in Ranchi. Call +91 97981 46740 or email us today.",
}

export default function Contact() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-red-500 text-white py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get In Touch</h1>
          <p className="text-lg md:text-xl opacity-95">
            Have questions? We're here to help! Reach out to us anytime.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-16 px-5 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
