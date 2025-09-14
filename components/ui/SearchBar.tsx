'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

export function SearchBar() {
  const [query, setQuery] = useState('')
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement search functionality
    console.log('Searching for:', query)
  }
  
  return (
    <form onSubmit={handleSearch} className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search stories, authors..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
    </form>
  )
}