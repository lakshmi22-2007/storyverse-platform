'use client'

import { useState } from 'react'

export function GenreFilter() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  
  const genres = [
    { id: 'FANTASY', name: 'Fantasy', count: 156 },
    { id: 'ROMANCE', name: 'Romance', count: 203 },
    { id: 'HORROR', name: 'Horror', count: 89 },
    { id: 'SCIFI', name: 'Sci-Fi', count: 134 },
    { id: 'MYSTERY', name: 'Mystery', count: 112 },
    { id: 'THRILLER', name: 'Thriller', count: 78 },
    { id: 'DRAMA', name: 'Drama', count: 145 },
    { id: 'COMEDY', name: 'Comedy', count: 67 },
    { id: 'HISTORICAL', name: 'Historical', count: 92 },
    { id: 'POETRY', name: 'Poetry', count: 234 },
  ]
  
  const toggleGenre = (genreId: string) => {
    setSelectedGenres(prev => 
      prev.includes(genreId) 
        ? prev.filter(id => id !== genreId)
        : [...prev, genreId]
    )
  }
  
  return (
    <div className="card">
      <h3 className="font-semibold text-gray-900 mb-4">Filter by Genre</h3>
      <div className="space-y-2">
        {genres.map((genre) => (
          <label key={genre.id} className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedGenres.includes(genre.id)}
              onChange={() => toggleGenre(genre.id)}
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="flex-1 text-sm text-gray-700">{genre.name}</span>
            <span className="text-xs text-gray-500">({genre.count})</span>
          </label>
        ))}
      </div>
    </div>
  )
}