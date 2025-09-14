import Link from 'next/link'
import { PenTool, Users, Trophy } from 'lucide-react'

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Share Your Stories,<br />
          <span className="text-primary-600">Win Recognition</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join a community of storytellers where your creativity gets the spotlight. 
          Post stories, engage with readers, and compete for monthly publication.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/write" className="btn-primary text-lg px-8 py-3">
            Start Writing
          </Link>
          <Link href="/discover" className="btn-secondary text-lg px-8 py-3">
            Explore Stories
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <PenTool className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Write & Share</h3>
            <p className="text-gray-600">Post your original stories and reach passionate readers</p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Engage Community</h3>
            <p className="text-gray-600">Like, comment, and connect with fellow storytellers</p>
          </div>
          <div className="text-center">
            <Trophy className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Win Publication</h3>
            <p className="text-gray-600">Top monthly stories get published in community books</p>
          </div>
        </div>
      </div>
    </section>
  )
}