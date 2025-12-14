import Link from "next/link"
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <main className="flex-grow flex items-center justify-center relative overflow-hidden">
                {/* Background Gradients/Glows for Premium Feel */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-orange-200/30 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-blue-200/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
                </div>

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-[150px] md:text-[200px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600 select-none drop-shadow-sm">
                        404
                    </h1>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
                        Off the Map?
                    </h2>

                    <p className="text-lg text-gray-600 max-w-lg mx-auto mb-10 leading-relaxed">
                        It looks like this roadmap leads to nowhere. Don't worry, even the best explorers get lost sometimes. Let's get you back on track.
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                        Back to Homepage
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    )
}
