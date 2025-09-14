'use client'

import { useState } from 'react'
import { Save, Eye } from 'lucide-react'

export function StoryEditor() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [genre, setGenre] = useState('FANTASY')
  const [isPreview, setIsPreview] = useState(false)
  
  const genres = [
    'FANTASY', 'ROMANCE', 'HORROR', 'SCIFI', 'MYSTERY', 
    'THRILLER', 'DRAMA', 'COMEDY', 'ADVENTURE', 'HISTORICAL', 'POETRY', 'OTHER'
  ]
  
  const handleSave = () => {
    // TODO: Implement save functionality
    console.log('Saving story:', { title, content, genre })
  }
  
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Story Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your story title..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Genre
          </label>
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {genres.map((g) => (
              <option key={g} value={g}>
                {g.charAt(0) + g.slice(1).toLowerCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Story Content</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsPreview(!isPreview)}
            className="flex items-center space-x-2 px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Eye className="h-4 w-4" />
            <span>{isPreview ? 'Edit' : 'Preview'}</span>
          </button>
          <button
            onClick={handleSave}
            className="btn-primary flex items-center space-x-2"
          >
            <Save className="h-4 w-4" />
            <span>Save Story</span>
          </button>
        </div>
      </div>
      
      {isPreview ? (
        <div className="card min-h-96">
          <h3 className="text-xl font-bold mb-4">{title || 'Untitled Story'}</h3>
          <div className="prose max-w-none">
            {content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing your story here..."
          rows={20}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
        />
      )}
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{content.length} characters</span>
        <span>{content.split(' ').filter(word => word.length > 0).length} words</span>
      </div>
    </div>
  )
}