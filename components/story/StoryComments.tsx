'use client'

import { useState } from 'react'
import { MessageCircle, Send, Heart, Reply } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

interface StoryCommentsProps {
  storyId: string
}

export function StoryComments({ storyId }: StoryCommentsProps) {
  const [newComment, setNewComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Mock comments data
  const [comments, setComments] = useState([
    {
      id: '1',
      content: 'This is absolutely brilliant! The way you describe the hidden library gave me chills. I could almost smell the old books and feel the warmth of the golden light.',
      author: { name: 'Maya Patel', username: 'bookworm_maya', avatar: null },
      createdAt: new Date('2024-12-02T10:30:00'),
      likes: 12,
      isLiked: false
    },
    {
      id: '2',
      content: 'The tension at the end is perfect! I need to know what happens next. Will there be a continuation?',
      author: { name: 'David Chen', username: 'story_explorer', avatar: null },
      createdAt: new Date('2024-12-02T14:15:00'),
      likes: 8,
      isLiked: false
    },
    {
      id: '3',
      content: 'Your world-building is incredible. The idea of books being forbidden feels so relevant to our current times. This story really makes you think.',
      author: { name: 'Lisa Rodriguez', username: 'fiction_fan', avatar: null },
      createdAt: new Date('2024-12-02T16:45:00'),
      likes: 15,
      isLiked: true
    }
  ])
  
  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim() || isSubmitting) return
    
    setIsSubmitting(true)
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const comment = {
        id: Date.now().toString(),
        content: newComment,
        author: { name: 'Current User', username: 'current_user', avatar: null },
        createdAt: new Date(),
        likes: 0,
        isLiked: false
      }
      
      setComments(prev => [comment, ...prev])
      setNewComment('')
    } catch (error) {
      console.error('Failed to post comment:', error)
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const handleLikeComment = (commentId: string) => {
    setComments(prev => prev.map(comment => 
      comment.id === commentId 
        ? { 
            ...comment, 
            isLiked: !comment.isLiked,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1
          }
        : comment
    ))
  }
  
  return (
    <section id="comments" className="card">
      <div className="flex items-center space-x-3 mb-6">
        <MessageCircle className="h-6 w-6 text-primary-600" />
        <h2 className="text-2xl font-bold text-gray-900">Comments ({comments.length})</h2>
      </div>
      
      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="flex space-x-4">
          <div className="flex-shrink-0">
            <div className="h-10 w-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-white">CU</span>
            </div>
          </div>
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts about this story..."
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            />
            <div className="flex items-center justify-between mt-3">
              <p className="text-sm text-gray-500">
                {newComment.length}/500 characters
              </p>
              <button
                type="submit"
                disabled={!newComment.trim() || isSubmitting}
                className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
                <span>{isSubmitting ? 'Posting...' : 'Post Comment'}</span>
              </button>
            </div>
          </div>
        </div>
      </form>
      
      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-white">
                  {comment.author.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-2">
                <h4 className="font-medium text-gray-900">{comment.author.name}</h4>
                <span className="text-sm text-gray-500">@{comment.author.username}</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">
                  {formatDistanceToNow(comment.createdAt, { addSuffix: true })}
                </span>
              </div>
              
              <p className="text-gray-700 mb-3">{comment.content}</p>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleLikeComment(comment.id)}
                  className={`flex items-center space-x-1 text-sm transition-colors ${
                    comment.isLiked ? 'text-red-600' : 'text-gray-500 hover:text-red-600'
                  }`}
                >
                  <Heart className={`h-4 w-4 ${comment.isLiked ? 'fill-current' : ''}`} />
                  <span>{comment.likes}</span>
                </button>
                
                <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-primary-600 transition-colors">
                  <Reply className="h-4 w-4" />
                  <span>Reply</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {comments.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <MessageCircle className="h-12 w-12 mx-auto mb-4 text-gray-300" />
          <p className="text-lg mb-2">No comments yet</p>
          <p>Be the first to share your thoughts about this story!</p>
        </div>
      )}
    </section>
  )
}