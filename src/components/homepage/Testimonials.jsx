import StarIcon from "@mui/icons-material/Star"

const testimonials = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Amazing service! Rented a bike for weekend trip and everything was smooth. Highly recommended.",
    avatar: "RK",
  },
  {
    name: "Priya Singh",
    rating: 5,
    text: "Great bikes, affordable prices. The helmet quality was excellent and staff was very friendly.",
    avatar: "PS",
  },
  {
    name: "Amit Patel",
    rating: 4,
    text: "Good experience renting from ZupRides. Quick booking process and well-maintained vehicles.",
    avatar: "AP",
  },
]

export default function Testimonials() {
  const sectionStyle = {
    padding: "60px 20px",
    backgroundColor: "#fff",
  }

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  }

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "40px",
    textAlign: "center",
    color: "#1a1a1a",
  }

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  }

  const cardStyle = {
    backgroundColor: "#f9f9f9",
    padding: "30px",
    borderRadius: "8px",
    borderLeft: "4px solid #FF5722",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  }

  const avatarStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#FF5722",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "15px",
  }

  const ratingStyle = {
    display: "flex",
    gap: "5px",
    marginBottom: "10px",
  }

  const starStyle = {
    color: "#FFC107",
    fontSize: "16px",
  }

  const textStyle = {
    color: "#666",
    fontSize: "14px",
    marginBottom: "15px",
    fontStyle: "italic",
    lineHeight: "1.6",
  }

  const nameStyle = {
    fontWeight: "bold",
    color: "#1a1a1a",
    fontSize: "15px",
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>What Our Customers Say</h2>

        <div style={gridStyle}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} style={cardStyle}>
              <div style={avatarStyle}>{testimonial.avatar}</div>
              <div style={ratingStyle}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} style={starStyle} />
                ))}
              </div>
              <p style={textStyle}>"{testimonial.text}"</p>
              <p style={nameStyle}>— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
