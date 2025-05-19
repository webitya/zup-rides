import Hero from "@/components/homepage/Hero"
import ClassesSection from "@/components/homepage/ClassesSection"
import AboutSection from "@/components/homepage/AboutSection"
import CoursesSection from "@/components/homepage/CoursesSection"
import EventsSection from "@/components/homepage/EventsSection"
import TestimonialsSection from "@/components/homepage/TestimonialsSection"
import RegisterSection from "@/components/homepage/RegisterSection"
import BlogSection from "@/components/homepage/BlogSection"
import InstructorCTA from "@/components/homepage/InstructorCTA"
import StatsSection from "@/components/homepage/StatsSection"

export default function Home() {
  return (
    <div className="min-h-screen">
      <h1 className="bg-red-500 text-white text-2xl text-center">Content is under development..</h1>
      <Hero />
      <h1 className="bg-red-500 text-white text-2xl text-center">Content is under development..</h1>
      <ClassesSection />
      <AboutSection />
      <CoursesSection />
      <StatsSection />
      <EventsSection />
      <RegisterSection />
      <TestimonialsSection />
      <InstructorCTA />
      <BlogSection />
    </div>
  )
}
