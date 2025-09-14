'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, MessageCircle, Eye, Calendar, Share2 } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

interface StoryCardProps {
  story: {
    id: string
    title: string
    excerpt: string
    author: {
      name: string
      username: string
    }
    genre: string
    likes: number
    comments: number
    reads: number
    publishedAt: Date
    coverImage?: string | null
  }
}

export function StoryCard({ story }: StoryCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(story.likes)
  const [isLiking, setIsLiking] = useState(false)
  const handleLike = async () => {
    if (isLiking) return
    
    setIsLiking(true)
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 500)) // Simulate API call
      
      if (isLiked) {
        setLikeCount(prev => prev - 1)
        setIsLiked(false)
      } else {
        setLikeCount(prev => prev + 1)
        setIsLiked(true)
      }
    } catch (error) {
      console.error('Failed to like story:', error)
    } finally {
      setIsLiking(false)
    }
  }
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: story.title,
        text: story.excerpt,
        url: `${window.location.origin}/story/${story.id}`
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${window.location.origin}/story/${story.id}`)
      // TODO: Show toast notification
      alert('Story link copied to clipboard!')
    }
  }

  const genreColors = {
    FANTASY: 'bg-purple-100 text-purple-800',
    ROMANCE: 'bg-pink-100 text-pink-800',
    HORROR: 'bg-red-100 text-red-800',
    SCIFI: 'bg-blue-100 text-blue-800',
    MYSTERY: 'bg-gray-100 text-gray-800',
    HISTORICAL: 'bg-amber-100 text-amber-800',
    POETRY: 'bg-green-100 text-green-800',
  }
  
  return (
    <div className="card hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${genreColors[story.genre as keyof typeof genreColors] || 'bg-gray-100 text-gray-800'}`}>
          {story.genre}
        </span>
        <div className="flex items-center text-xs text-gray-500">
          <Calendar className="h-3 w-3 mr-1" />
          {formatDistanceToNow(story.publishedAt, { addSuffix: true })}
        </div>
      </div>
      
      <Link href={`/story/${story.id}`} className="block">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
          {story.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {story.excerpt}
        </p>
      </Link>
      
      <div className="flex items-center justify-between">
        <Link href={`/profile/${story.author.username}`} className="text-sm text-gray-600 hover:text-primary-600">
          by {story.author.name}
        </Link>
        
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <button 
            onClick={handleLike}
            disabled={isLiking}
            className={`flex items-center space-x-1 transition-colors hover:text-red-500 ${
              isLiked ? 'text-red-500' : ''
            } ${isLiking ? 'opacity-50' : ''}`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            <span>{likeCount}</span>
          </button>
          <Link href={`/story/${story.id}#comments`} className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
            <MessageCircle className="h-4 w-4" />
            <span>{story.comments}</span>
          </Link>
          <div className="flex items-center space-x-1">
            <Eye className="h-4 w-4" />
            <span>{story.reads}</span>
          </div>
          <button 
            onClick={handleShare}
            className="flex items-center space-x-1 hover:text-green-500 transition-colors"
          >
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}