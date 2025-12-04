export default function AboutHero() {
  const sectionStyle = {
    padding: "60px 20px",
    backgroundColor: "#FF5722",
    color: "#fff",
    textAlign: "center",
  }

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
  }

  const titleStyle = {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "20px",
  }

  const subtitleStyle = {
    fontSize: "18px",
    lineHeight: "1.6",
    opacity: 0.95,
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>About ZupRides</h1>
        <p style={subtitleStyle}>
          Your trusted partner for bike and car rentals in Ranchi. We believe in providing premium vehicles with
          exceptional service at affordable prices. Discover the freedom to explore Ranchi at your own pace.
        </p>
      </div>
    </section>
  )
}
