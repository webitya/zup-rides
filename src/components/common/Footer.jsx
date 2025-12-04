import Link from "next/link"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"

export default function Footer() {
  const footerStyle = {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: "50px 20px 20px",
  }

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
    marginBottom: "40px",
  }

  const sectionTitleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#FF5722",
  }

  const linkStyle = {
    display: "block",
    marginBottom: "8px",
    color: "#ccc",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.3s",
  }

  const contactItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "12px",
    color: "#ccc",
    fontSize: "14px",
  }

  const iconStyle = {
    color: "#FF5722",
    fontSize: "20px",
  }

  const socialStyle = {
    display: "flex",
    gap: "15px",
    marginTop: "15px",
  }

  const bottomStyle = {
    borderTop: "1px solid #333",
    paddingTop: "20px",
    textAlign: "center",
    color: "#999",
    fontSize: "14px",
  }

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div>
          <div style={sectionTitleStyle}>About ZupRides</div>
          <p style={{ color: "#ccc", fontSize: "14px", lineHeight: "1.6" }}>
            Your trusted partner for bike and car rentals in Ranchi. Explore new adventures with premium vehicles and
            flexible plans.
          </p>
        </div>

        <div>
          <div style={sectionTitleStyle}>Quick Links</div>
          <Link href="/" style={linkStyle}>
            Home
          </Link>
          <Link href="/vehicles" style={linkStyle}>
            Vehicles
          </Link>
          <Link href="/about" style={linkStyle}>
            About Us
          </Link>
          <Link href="/contact" style={linkStyle}>
            Contact
          </Link>
          <Link href="/privacy-policy" style={linkStyle}>
            Privacy Policy
          </Link>
          <Link href="/terms-conditions" style={linkStyle}>
            Terms & Conditions
          </Link>
          <Link href="/refund-policy" style={linkStyle}>
            Refund Policy
          </Link>
        </div>

        <div>
          <div style={sectionTitleStyle}>Contact</div>
          <div style={contactItemStyle}>
            <LocationOnIcon style={iconStyle} />
            <span>Amar Chowk, Harihar Toli, Chutia, Ranchi, Jharkhand</span>
          </div>
          <div style={contactItemStyle}>
            <PhoneIcon style={iconStyle} />
            <span>+91 97981 46740</span>
          </div>
          <div style={contactItemStyle}>
            <EmailIcon style={iconStyle} />
            <span>support@zuprides.in</span>
          </div>
        </div>

        <div>
          <div style={sectionTitleStyle}>Follow Us</div>
          <div style={socialStyle}>
            <a href="#" style={{ color: "#FF5722", fontSize: "24px" }}>
              <FacebookIcon />
            </a>
            <a href="#" style={{ color: "#FF5722", fontSize: "24px" }}>
              <InstagramIcon />
            </a>
            <a href="#" style={{ color: "#FF5722", fontSize: "24px" }}>
              <TwitterIcon />
            </a>
          </div>
          <p style={{ marginTop: "20px", color: "#999", fontSize: "13px" }}>Subscribe to our newsletter</p>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <input
              type="email"
              placeholder="Your email"
              style={{ padding: "8px", flex: 1, fontSize: "12px", border: "none" }}
            />
            <button
              style={{
                padding: "8px 15px",
                backgroundColor: "#FF5722",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "12px",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div style={bottomStyle}>© 2025 ZupRides. All Rights Reserved. | Bike & Car Rentals in Ranchi, Jharkhand</div>
    </footer>
  )
}
