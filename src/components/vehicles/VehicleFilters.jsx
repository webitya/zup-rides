"use client"

export default function VehicleFilters({ filter, setFilter }) {
  const filters = [
    { value: "all", label: "All Vehicles" },
    { value: "scooter", label: "Scooters" },
    { value: "bike", label: "Bikes" },
  ]

  return (
    <div className="flex gap-4 flex-wrap mb-8">
      {filters.map((item) => (
        <button
          key={item.value}
          onClick={() => setFilter(item.value)}
          className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${filter === item.value
              ? "bg-orange-600 text-white shadow-lg shadow-orange-200 scale-105"
              : "bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-300 hover:text-orange-600"
            }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
