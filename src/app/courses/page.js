import Link from "next/link"

// This would be a server component that fetches courses from MongoDB
async function getCourses() {
  // In a real implementation, this would fetch from MongoDB
  return [
    {
      id: 1,
      title: "Basic WordPress Development",
      description: "Lorem Ipsum is simply dummy text of the printing and industry.",
      image: "/placeholder.svg?height=300&width=400",
      instructor: "Devid Cameroon",
      students: 763,
      reviews: 205,
      price: 499,
      slug: "basic-wordpress-development",
    },
    {
      id: 2,
      title: "Mastering PHP Language",
      description: "Lorem Ipsum is simply dummy text of the printing and industry.",
      image: "/placeholder.svg?height=300&width=400",
      instructor: "Donal Trump",
      students: 763,
      reviews: 205,
      price: 149,
      slug: "mastering-php-language",
    },
    {
      id: 3,
      title: "Javascript Development",
      description: "Lorem Ipsum is simply dummy text of the printing and industry.",
      image: "/placeholder.svg?height=300&width=400",
      instructor: "Jone",
      students: 763,
      reviews: 205,
      price: 239,
      slug: "javascript-development",
    },
    {
      id: 4,
      title: "Frontend Development",
      description: "Lorem Ipsum is simply dummy text of the printing and industry.",
      image: "/placeholder.svg?height=300&width=400",
      instructor: "Angelina",
      students: 763,
      reviews: 205,
      price: 849,
      slug: "frontend-development",
    },
  ]
}

export default async function CoursesPage() {
  const courses = await getCourses()

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Courses</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
                <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 rounded-br-lg">
                  ${course.price}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Instructor: {course.instructor}</span>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    View Course
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
