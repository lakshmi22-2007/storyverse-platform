'use client'

import Link from 'next/link'
import { BookOpen, PenTool, Trophy, User } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">StoryVerse</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/discover" className="text-gray-600 hover:text-gray-900">
              Discover
            </Link>
            <Link href="/contest" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
              <Trophy className="h-4 w-4" />
              <span>Contest</span>
            </Link>
            <Link href="/leaderboard" className="text-gray-600 hover:text-gray-900">
              Leaderboard
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/write" className="btn-primary flex items-center space-x-2">
              <PenTool className="h-4 w-4" />
              <span>Write Story</span>
            </Link>
            <Link href="/profile" className="text-gray-600 hover:text-gray-900">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}