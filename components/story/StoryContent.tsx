import Link from 'next/link'
import { Calendar, Clock, Hash, Eye } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

interface StoryContentProps {
  story: {
    id: string
    title: string
    content: string
    author: {
      id: string
      name: string
      username: string
      avatar: string | null
      bio: string
    }
    genre: string
    publishedAt: Date
    updatedAt: Date
    wordCount: number
    readingTime: number
    reads: number
    tags: string[]
  }
}

export function StoryContent({ story }: StoryContentProps) {
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
    <article className="card">
      {/* Story Header */}
      <header className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${genreColors[story.genre as keyof typeof genreColors] || 'bg-gray-100 text-gray-800'}`}>
            {story.genre}
          </span>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{story.reads} reads</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{story.readingTime} min read</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{story.title}</h1>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href={`/profile/${story.author.username}`} className="flex items-center space-x-3 hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors">
              <div className="h-10 w-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-white">
                  {story.author.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="font-medium text-gray-900">{story.author.name}</p>
                <p className="text-sm text-gray-600">@{story.author.username}</p>
              </div>
            </Link>
          </div>
          
          <div className="text-right text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Published {formatDistanceToNow(story.publishedAt, { addSuffix: true })}</span>
            </div>
            <p>{story.wordCount} words</p>
          </div>
        </div>
      </header>
      
      {/* Story Content */}
      <div className="prose prose-lg max-w-none mb-8">
        {story.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4 leading-relaxed text-gray-800">
            {paragraph}
          </p>
        ))}
      </div>
      
      {/* Tags */}
      {story.tags.length > 0 && (
        <div className="border-t pt-6">
          <div className="flex items-center space-x-2 mb-3">
            <Hash className="h-4 w-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-700">Tags</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {story.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}