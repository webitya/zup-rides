import Link from "next/link"
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike"
import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"

export default function HomepageHero() {
  return (
    <div className="bg-gradient-to-br from-[#FF5722] to-[#FF7043] text-white py-20 px-5 text-center mb-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 leading-tight">Discover Ranchi Like Never Before!</h1>
        <p className="text-xl mb-8 opacity-95 leading-relaxed">
          Rent premium bikes and scooters from just ₹299/- and explore the city at your own pace
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-10">
          <Link
            href="/vehicles"
            className="bg-white text-[#FF5722] border-none py-3 px-8 text-base font-bold cursor-pointer rounded-full transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-lg"
          >
            Book Your Ride Now
          </Link>
          <Link
            href="/contact"
            className="bg-transparent text-white border-2 border-white py-2.5 px-7 text-base font-bold cursor-pointer rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105"
          >
            Contact Us
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 p-8 bg-white/10 rounded-xl backdrop-blur-sm">
          <div className="flex flex-col items-center gap-2.5">
            <LocalOfferIcon className="text-4xl text-white" />
            <span className="text-sm font-bold">From ₹299</span>
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <DirectionsBikeIcon className="text-4xl text-white" />
            <span className="text-sm font-bold">Quality Bikes</span>
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <AirlineSeatFlatIcon className="text-4xl text-white" />
            <span className="text-sm font-bold">Free Helmets</span>
          </div>
        </div>
      </div>
    </div>
  )
}
