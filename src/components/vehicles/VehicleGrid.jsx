import VehicleCard from "./VehicleCard"

import { allVehicles } from "../../lib/vehicles"

export default function VehicleGrid({ filter }) {
  const filteredVehicles = filter === "all" ? allVehicles : allVehicles.filter((v) => v.type === filter)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {filteredVehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  )
}
