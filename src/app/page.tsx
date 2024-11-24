import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-teal-500">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Find Your Perfect Wave Moment
          </h1>
          <p className="text-xl text-white mb-8">
            Connect surfers with professional photographers capturing their epic rides
          </p>
          <div className="space-x-4">
            <Link href="/photographer/register"
              className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
              I'm a Photographer
            </Link>
            <Link href="/surfer/search"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
              Find My Photos
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/90 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-600 mb-4">For Photographers</h3>
            <p className="text-gray-600">Upload and sell your surf photography to passionate surfers looking for their perfect wave moments.</p>
          </div>
          <div className="bg-white/90 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-600 mb-4">For Surfers</h3>
            <p className="text-gray-600">Find photos of yourself surfing using our AI-powered face matching technology.</p>
          </div>
          <div className="bg-white/90 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Easy Process</h3>
            <p className="text-gray-600">Simple upload, search, and purchase process to connect photographers with surfers.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
