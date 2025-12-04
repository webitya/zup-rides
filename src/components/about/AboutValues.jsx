import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import PeopleIcon from "@mui/icons-material/People"
import SpeedIcon from "@mui/icons-material/Speed"
import LocalFloristIcon from "@mui/icons-material/LocalFlorist"

export default function AboutValues() {
  const values = [
    {
      icon: ThumbUpIcon,
      name: "Quality First",
      desc: "We maintain the highest standards for all our vehicles with regular maintenance and safety checks.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: PeopleIcon,
      name: "Customer Focus",
      desc: "Your satisfaction is our top priority. We're here to make your rental experience seamless.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: SpeedIcon,
      name: "Quick Service",
      desc: "Fast booking and hassle-free rental process. Get on the road in minutes, not hours.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: LocalFloristIcon,
      name: "Eco-Friendly",
      desc: "Supporting sustainable and clean transportation for a greener Ranchi.",
      color: "from-green-500 to-emerald-500"
    },
  ]

  return (
    <section className="py-20 px-5 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Core Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that drive us to deliver exceptional service every single day
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => {
            const IconComponent = value.icon
            return (
              <div
                key={idx}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon with Gradient Background */}
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white text-3xl" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.name}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-8 max-w-3xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Experience the Difference?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied customers who trust ZupRides for their transportation needs in Ranchi.
            </p>
            <a
              href="/vehicles"
              className="inline-block bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-full font-bold hover:from-orange-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Browse Our Vehicles
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
