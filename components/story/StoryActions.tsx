'use client'

import { useState } from 'react'
import { Heart, MessageCircle, Share2, Bookmark, Flag } from 'lucide-react'

interface StoryActionsProps {
  story: {
    id: string
    title: string
    likes: number
    comments: number
  }
}

export function StoryActions({ story }: StoryActionsProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [likeCount, setLikeCount] = useState(story.likes)
  const [isLiking, setIsLiking] = useState(false)
  
  const handleLike = async () => {
    if (isLiking) return
    
    setIsLiking(true)
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 500))
      
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
  
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    // TODO: API call to save/remove bookmark
  }
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: story.title,
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Story link copied to clipboard!')
    }
  }
  
  return (
    <div className="card bg-gray-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <button 
            onClick={handleLike}
            disabled={isLiking}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              isLiked 
                ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-600'
            } ${isLiking ? 'opacity-50' : ''}`}
          >
            <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
            <span className="font-medium">{likeCount}</span>
            <span className="text-sm">Like{likeCount !== 1 ? 's' : ''}</span>
          </button>
          
          <a 
            href="#comments"
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">{story.comments}</span>
            <span className="text-sm">Comment{story.comments !== 1 ? 's' : ''}</span>
          </a>
        </div>
        
        <div className="flex items-center space-x-2">
          <button 
            onClick={handleBookmark}
            className={`p-2 rounded-lg transition-all ${
              isBookmarked 
                ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' 
                : 'bg-white text-gray-600 hover:bg-yellow-50 hover:text-yellow-600'
            }`}
            title="Bookmark story"
          >
            <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
          
          <button 
            onClick={handleShare}
            className="p-2 rounded-lg bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 transition-all"
            title="Share story"
          >
            <Share2 className="h-5 w-5" />
          </button>
          
          <button 
            className="p-2 rounded-lg bg-white text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all"
            title="Report story"
          >
            <Flag className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}