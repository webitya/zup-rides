import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import AccessTimeIcon from "@mui/icons-material/AccessTime"

export default function ContactInfo() {
  const contactItems = [
    {
      icon: PhoneIcon,
      title: "Phone",
      content: (
        <a href="tel:+919798146740" className="text-orange-600 hover:text-orange-700 font-medium">
          +91 97981 46740
        </a>
      ),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: EmailIcon,
      title: "Email",
      content: (
        <div className="space-y-1">
          <a href="mailto:support@zuprides.in" className="text-orange-600 hover:text-orange-700 font-medium block">
            support@zuprides.in
          </a>
          <div className="text-gray-600 text-sm">zuprides@gmail.com</div>
        </div>
      ),
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: LocationOnIcon,
      title: "Address",
      content: (
        <p className="text-gray-600 leading-relaxed">
          Amar Chowk, Harihar Toli, Chutia,<br />
          Ranchi, Jharkhand 834001
        </p>
      ),
      color: "from-orange-500 to-red-500"
    },
    {
      icon: AccessTimeIcon,
      title: "Business Hours",
      content: (
        <p className="text-gray-600 leading-relaxed">
          Monday - Sunday<br />
          9:00 AM - 9:00 PM
        </p>
      ),
      color: "from-green-500 to-emerald-500"
    },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
        
        <div className="space-y-6">
          {contactItems.map((item, idx) => {
            const IconComponent = item.icon
            return (
              <div key={idx} className="flex gap-4 group">
                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                  <div className="text-sm">{item.content}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Map or Additional Info */}
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 p-6 rounded-2xl">
        <h3 className="text-lg font-bold text-gray-900 mb-3">Why Choose ZupRides?</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-orange-600 mt-0.5">✓</span>
            <span>24/7 customer support available</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-600 mt-0.5">✓</span>
            <span>Quick response time - usually within 1 hour</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-600 mt-0.5">✓</span>
            <span>Trusted by 1000+ customers in Ranchi</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
