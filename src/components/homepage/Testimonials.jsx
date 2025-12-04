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
  return (
    <section className="py-16 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">What Our Customers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#FF5722] shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-[#FF5722] text-white flex items-center justify-center font-bold text-lg mb-4">
                {testimonial.avatar}
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="text-[#FFC107] text-base" />
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-4 italic leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>
              <p className="font-bold text-gray-900 text-sm">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
