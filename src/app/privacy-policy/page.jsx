import Header from "../../components/common/Header"
import Footer from "../../components/common/Footer"

export const metadata = {
  title: "Privacy Policy - ZupRides | Bike & Car Rentals in Ranchi",
  description: "Privacy policy for ZupRides bike and car rental services in Ranchi, Jharkhand.",
}

export default function PrivacyPolicy() {
  const containerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 20px",
    color: "#333",
    lineHeight: "1.8",
  }

  const titleStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#FF5722",
    marginBottom: "30px",
  }

  const sectionStyle = {
    marginBottom: "30px",
  }

  const sectionTitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: "15px",
  }

  const listItemStyle = {
    marginLeft: "20px",
    marginBottom: "8px",
  }

  const contactBoxStyle = {
    backgroundColor: "#fff3e0",
    border: "2px solid #FF5722",
    padding: "20px",
    marginTop: "30px",
    borderRadius: "8px",
  }

  const contactNameStyle = {
    fontWeight: "bold",
    fontSize: "16px",
    marginBottom: "10px",
  }

  const contactItemStyle = {
    marginBottom: "5px",
    fontSize: "14px",
  }

  return (
    <>
      <Header />
      <div style={containerStyle}>
        <h1 style={titleStyle}>Privacy Policy</h1>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Your privacy is very important to us</h2>
          <p>
            This Privacy Policy explains how we collect, use, and protect your personal information when you shop with
            us.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>1. Information We Collect</h2>
          <p>When you place an order or interact with our website, we may collect the following information:</p>
          <ul>
            <li style={listItemStyle}>Your name</li>
            <li style={listItemStyle}>Phone number</li>
            <li style={listItemStyle}>Email address</li>
            <li style={listItemStyle}>Shipping and billing address</li>
            <li style={listItemStyle}>Payment details (processed securely via third-party gateways)</li>
            <li style={listItemStyle}>Order history and preferences</li>
            <li style={listItemStyle}>Communication or feedback</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li style={listItemStyle}>Process and deliver your orders</li>
            <li style={listItemStyle}>Provide customer support</li>
            <li style={listItemStyle}>Send order updates and promotional offers (only with your consent)</li>
            <li style={listItemStyle}>Improve our website and services</li>
            <li style={listItemStyle}>Comply with legal obligations</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>3. Sharing Your Information</h2>
          <p>We do not sell or rent your personal information to third parties.</p>
          <p>We may share it only with:</p>
          <ul>
            <li style={listItemStyle}>
              Trusted service providers (e.g. delivery partners, payment processors) to fulfill your order
            </li>
            <li style={listItemStyle}>Government authorities if required by law</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>4. Data Security</h2>
          <p>
            We take reasonable steps to protect your personal data from unauthorized access, misuse, or loss. Payments
            are securely handled by trusted payment gateways and not stored on our servers.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>5. Cookies</h2>
          <p>
            Our website uses cookies to improve your browsing experience. Cookies help us remember your preferences and
            track website performance. You can manage or disable cookies in your browser settings.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li style={listItemStyle}>Access or update your personal information</li>
            <li style={listItemStyle}>
              Request deletion of your data (subject to order history and legal requirements)
            </li>
            <li style={listItemStyle}>Opt out of marketing communications</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>7. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
          <div style={contactBoxStyle}>
            <div style={contactNameStyle}>AMAN KUMAR</div>
            <div style={contactItemStyle}>
              <strong>Phone:</strong> +91 97981 46740
            </div>
            <div style={contactItemStyle}>
              <strong>Email:</strong> support@zuprides.in
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
