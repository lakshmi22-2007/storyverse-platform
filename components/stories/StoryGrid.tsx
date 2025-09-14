'use client'

import { StoryCard } from './StoryCard'

export function StoryGrid() {
  // Mock data - replace with real data from API
  const stories = [
    {
      id: '1',
      title: 'The Last Library',
      excerpt: 'In a world where books are forbidden, Maya discovers the last hidden library and must protect it from those who would destroy knowledge forever...',
      author: { name: 'Sarah Chen', username: 'sarahwrites' },
      genre: 'SCIFI',
      likes: 342,
      comments: 28,
      reads: 1205,
      publishedAt: new Date('2024-12-01'),
      coverImage: null
    },
    {
      id: '2',
      title: 'Midnight Coffee',
      excerpt: 'Every night at 3 AM, the coffee shop on Fifth Street serves customers who shouldn\'t exist. Tonight, I\'m one of them...',
      author: { name: 'Alex Rivera', username: 'alexstories' },
      genre: 'MYSTERY',
      likes: 298,
      comments: 45,
      reads: 987,
      publishedAt: new Date('2024-12-02'),
      coverImage: null
    },
    // Add more mock stories...
  ]
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-gray-600">{stories.length} stories found</p>
        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
          <option>Most Popular</option>
          <option>Most Recent</option>
          <option>Most Liked</option>
          <option>Most Commented</option>
        </select>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  )
}