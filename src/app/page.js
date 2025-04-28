import HeroCarousel from "@/Components/home_carousel";
import Home_para from "@/Components/home_para"
import Home_features from "@/Components/home_features"
import Rental_plans from "@/Components/home_rental_plans"
import Bike_options from "@/Components/home_Bike_Options"
import Experince_freedom from "@/Components/experince_freedom"
import Contact_us from "@/Components/home_contact_us"
import Home_affordable from "@/Components/home_affordable"

export default function Home() {
  return (
   <>
   <HeroCarousel />
   <Home_para />
   <Home_features />
   <Rental_plans />
   <Bike_options />
   <Experince_freedom />
   <Home_affordable />
   <Contact_us />
   </>
  );
}
