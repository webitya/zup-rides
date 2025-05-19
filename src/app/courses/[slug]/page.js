import Link from "next/link"
import { Star, People, AccessTime, MenuBook } from "@mui/icons-material"

// This would be a server component that fetches a course from MongoDB
async function getCourse(slug) {
  // In a real implementation, this would fetch from MongoDB
  const courses = {
    "basic-wordpress-development": {
      id: 1,
      title: "Basic WordPress Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      longDescription:
        "This comprehensive course will take you from a complete beginner to a WordPress developer. You'll learn how to create custom themes, plugins, and how to optimize WordPress sites for performance and security. By the end of this course, you'll have the skills to build professional WordPress websites for clients or for your own projects.",
      image: "/placeholder.svg?height=600&width=800",
      instructor: "Devid Cameroon",
      instructorImage: "/placeholder.svg?height=100&width=100",
      students: 763,
      reviews: 205,
      rating: 4.8,
      price: 499,
      duration: "10 weeks",
      lessons: 42,
      features: [
        "Custom theme development",
        "Plugin creation",
        "E-commerce integration",
        "Performance optimization",
        "Security best practices",
      ],
    },
    "mastering-php-language": {
      id: 2,
      title: "Mastering PHP Language",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      longDescription:
        "Master the PHP programming language with this in-depth course. You'll learn everything from basic syntax to advanced concepts like object-oriented programming, working with databases, and building secure web applications. This course is perfect for web developers looking to enhance their backend skills.",
      image: "/placeholder.svg?height=600&width=800",
      instructor: "Donal Trump",
      instructorImage: "/placeholder.svg?height=100&width=100",
      students: 763,
      reviews: 205,
      rating: 4.7,
      price: 149,
      duration: "8 weeks",
      lessons: 36,
      features: [
        "Object-oriented programming",
        "Database integration",
        "RESTful API development",
        "Security and authentication",
        "Modern PHP frameworks",
      ],
    },
  }

  return courses[slug] || null
}

export default async function CoursePage({ params }) {
  const course = await getCourse(params.slug)

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <p className="mb-8">The course you're looking for doesn't exist or has been removed.</p>
          <Link
            href="/courses"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-6">{course.title}</h1>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="ml-1">
                  {course.rating} ({course.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center">
                <People className="h-5 w-5 text-blue-600" />
                <span className="ml-1">{course.students} students</span>
              </div>
              <div className="flex items-center">
                <AccessTime className="h-5 w-5 text-blue-600" />
                <span className="ml-1">{course.duration}</span>
              </div>
              <div className="flex items-center">
                <MenuBook className="h-5 w-5 text-blue-600" />
                <span className="ml-1">{course.lessons} lessons</span>
              </div>
            </div>

            <div className="mb-8">
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Course Description</h2>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <p className="text-gray-700">{course.longDescription}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Instructor</h2>
              <div className="flex items-center">
                <img
                  src={course.instructorImage || "/placeholder.svg"}
                  alt={course.instructor}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{course.instructor}</h3>
                  <p className="text-gray-600">Course Instructor</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <div className="text-3xl font-bold mb-4">${course.price}</div>

              <div className="space-y-4 mb-6">
                <button className="w-full py-3 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition-colors">
                  Enroll Now
                </button>

                <Link
                  href={`https://wa.me/1234567890?text=I'm%20interested%20in%20the%20${encodeURIComponent(course.title)}%20course`}
                  target="_blank"
                  className="w-full py-3 bg-green-500 text-white rounded font-bold hover:bg-green-600 transition-colors flex justify-center items-center"
                >
                  <span>WhatsApp Inquiry</span>
                </Link>

                <Link
                  href={`/contact?course=${encodeURIComponent(course.title)}`}
                  className="w-full py-3 border border-blue-600 text-blue-600 rounded font-bold hover:bg-blue-50 transition-colors text-center block"
                >
                  Email Inquiry
                </Link>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-bold mb-2">This course includes:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <AccessTime className="h-5 w-5 text-gray-500 mr-2" />
                    <span>{course.duration} of content</span>
                  </li>
                  <li className="flex items-center">
                    <MenuBook className="h-5 w-5 text-gray-500 mr-2" />
                    <span>{course.lessons} lessons</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gray-500 mr-2">✓</span>
                    <span>Full lifetime access</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gray-500 mr-2">✓</span>
                    <span>Certificate of completion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
