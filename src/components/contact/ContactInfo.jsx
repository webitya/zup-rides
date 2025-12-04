import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import AccessTimeIcon from "@mui/icons-material/AccessTime"

export default function ContactInfo() {
  const infoStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  }

  const itemStyle = {
    display: "flex",
    gap: "15px",
  }

  const iconStyle = {
    fontSize: "30px",
    color: "#FF5722",
    minWidth: "30px",
  }

  const contentStyle = {
    flex: 1,
  }

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#1a1a1a",
  }

  const valueStyle = {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.5",
  }

  const linkStyle = {
    color: "#FF5722",
    textDecoration: "none",
  }

  return (
    <div style={infoStyle}>
      <div style={itemStyle}>
        <PhoneIcon style={iconStyle} />
        <div style={contentStyle}>
          <div style={titleStyle}>Phone</div>
          <a href="tel:+919798146740" style={{ ...valueStyle, ...linkStyle }}>
            +91 97981 46740
          </a>
        </div>
      </div>

      <div style={itemStyle}>
        <EmailIcon style={iconStyle} />
        <div style={contentStyle}>
          <div style={titleStyle}>Email</div>
          <a href="mailto:support@zuprides.in" style={{ ...valueStyle, ...linkStyle }}>
            support@zuprides.in
          </a>
          <div style={valueStyle}>zuprides@gmail.com</div>
        </div>
      </div>

      <div style={itemStyle}>
        <LocationOnIcon style={iconStyle} />
        <div style={contentStyle}>
          <div style={titleStyle}>Address</div>
          <p style={valueStyle}>
            Amar Chowk, Harihar Toli, Chutia,
            <br />
            Ranchi, Jharkhand 834001
          </p>
        </div>
      </div>

      <div style={itemStyle}>
        <AccessTimeIcon style={iconStyle} />
        <div style={contentStyle}>
          <div style={titleStyle}>Hours</div>
          <p style={valueStyle}>
            Monday - Sunday
            <br />
            9:00 AM - 9:00 PM
          </p>
        </div>
      </div>
    </div>
  )
}
