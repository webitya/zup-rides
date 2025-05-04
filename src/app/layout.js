import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

export const metadata = {
  title: "Zuprides – Affordabl Bike and Scooty Rentals in India",
  description:
    "Zuprides offers reliable, budget-friendly  bike rentals across India. Book online for hassle-free travel experiences with doorstep delivery, flexible pricing, and 24/7 support.",
  keywords: [
    "Zuprides",
    "bike rental",
    "self-drive car",
    "scooty rental",
    "affordable rentals",
    "Ranchi car hire",
    "India bike booking",
    "travel services India",
  ],
  authors: [{ name: "Zuprides India", url: "https://zuprides.in" }],
  openGraph: {
    title: "Zuprides – Affordable  Bike and Scooty Rentals",
    description:
      "Rent bikes at the best prices across India with Zuprides. Safe, reliable, and convenient options for local and outstation travel.",
    url: "https://zuprides.in",
    siteName: "Zuprides",
    images: [
      {
        url: "/logo.jpg", // 🔁 Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Zuprides Bike & Scooty Rentals",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@zuprides", // 🔁 Replace if your brand has a Twitter/X handle
    title: "Zuprides – Rent Bikes and Scooty Easily",
    description:
      "Book your ride with Zuprides for safe and affordable transportation across India. Instant booking and 24/7 support.",
    images: ["/logo.jpg"], // 🔁 Replace with your actual image URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />

        {/* Floating Action Buttons */}
        <div className="fixed bottom-4 right-4 flex flex-col items-end gap-2 z-50">
          <a
            href="tel:+919798146740"
            className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 flex items-center justify-center rounded-[5px] shadow-md transition"
            title="Call Now"
          >
            <CallIcon fontSize="small" />
          </a>
          <a
            href="https://wa.me/919798146740"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-[5px] shadow-md transition"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon fontSize="small" />
          </a>
          <a
            href="https://instagram.com/zuprides.india"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-700 text-white w-10 h-10 flex items-center justify-center rounded-[5px] shadow-md transition"
            title="Visit Instagram"
          >
            <InstagramIcon fontSize="small" />
          </a>
        </div>
      </body>
    </html>
  );
}
