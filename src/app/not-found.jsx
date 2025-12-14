import Link from "next/link"
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen bg-[#fafaf9] relative selection:bg-orange-100 selection:text-orange-900">
            <Header />

            <main className="flex-grow flex items-center justify-center relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
                {/* Abstract Background Elements */}
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                    {/* Subtle Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                    {/* Gradient Blobs */}
                    <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-gradient-to-br from-orange-200/40 to-amber-100/40 rounded-full blur-[100px] animate-pulse mix-blend-multiply" />
                    <div className="absolute top-[20%] -right-[5%] w-[50%] h-[70%] bg-gradient-to-bl from-blue-100/40 to-indigo-50/40 rounded-full blur-[120px] animate-pulse mix-blend-multiply" style={{ animationDelay: "2s", animationDuration: "7s" }} />
                    <div className="absolute -bottom-[20%] left-[20%] w-[40%] h-[40%] bg-gradient-to-t from-orange-100/50 to-rose-100/50 rounded-full blur-[80px] animate-pulse mix-blend-multiply" style={{ animationDelay: "4s" }} />
                </div>

                <div className="relative z-10 text-center px-4 max-w-lg mx-auto">
                    <h1 className="text-[100px] md:text-[200px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600 select-none drop-shadow-sm mb-0">
                        404
                    </h1>

                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2 mb-3 md:mb-4 tracking-tight">
                        Off the Map?
                    </h2>

                    <p className="text-sm md:text-lg text-gray-600 mb-8 leading-relaxed px-4">
                        It looks like this roadmap leads to nowhere. Don't worry, even the best explorers get lost sometimes. Let's get you back on track.
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                        Back to Homepage
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    )
}
