import VerifiedIcon from "@mui/icons-material/Verified"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import SecurityIcon from "@mui/icons-material/Security"
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement"

export default function Features() {
  const features = [
    {
      icon: VerifiedIcon,
      title: "Well-Maintained Vehicles",
      text: "All our bikes and scooters are regularly serviced and in perfect condition.",
    },
    {
      icon: LocalShippingIcon,
      title: "Flexible Pickup & Drop",
      text: "Choose your own time and location for convenient pickup and drop-off.",
    },
    {
      icon: SecurityIcon,
      title: "No Hidden Charges",
      text: "Transparent pricing with full breakdown. What you see is what you pay.",
    },
    {
      icon: SelfImprovementIcon,
      title: "Free Helmets Included",
      text: "Safety first! All rentals include premium helmets at no extra cost.",
    },
  ]

  return (
    <section className="py-16 px-5 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Why Choose ZupRides?</h2>
        <p className="text-center text-gray-600 mb-10 text-base">
          Your trusted partner for bike and car rentals in Ranchi
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon
            return (
              <div
                key={idx}
                className="flex gap-4 bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <IconComponent className="text-4xl text-[#FF5722] min-w-[50px]" />
                <div className="flex-1">
                  <div className="text-lg font-bold mb-2 text-gray-900">{feature.title}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
