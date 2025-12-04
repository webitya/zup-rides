import Header from "@/components/common/Header"
import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"
import Footer from "@/components/common/Footer"

export const metadata = {
  title: "Contact ZupRides - Get in Touch with Our Team",
  description: "Contact ZupRides for bike and car rentals in Ranchi. Call +91 97981 46740 or email us today.",
}

export default function Contact() {
  return (
    <>
      <Header />
      <div style={{ minHeight: "calc(100vh - 200px)", padding: "40px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginBottom: "30px",
              textAlign: "center",
              color: "#1a1a1a",
            }}
          >
            Get In Touch
          </h1>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", gap: "40px" }}>
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
