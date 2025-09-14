import { TrendingUp } from 'lucide-react'
import { StoryCard } from '@/components/stories/StoryCard'

export function TrendingStories() {
  // Mock trending stories data
  const trendingStories = [
    {
      id: '4',
      title: 'The Memory Thief',
      excerpt: 'In Victorian London, someone is stealing memories from the wealthy elite...',
      author: { name: 'Emma Watson', username: 'emmawrites' },
      genre: 'HISTORICAL',
      likes: 189,
      comments: 23,
      reads: 756,
      publishedAt: new Date('2024-12-04'),
      coverImage: null
    },
    {
      id: '5',
      title: 'Quantum Café',
      excerpt: 'A coffee shop that exists in multiple dimensions serves very unusual customers...',
      author: { name: 'Marcus Johnson', username: 'quantumwriter' },
      genre: 'SCIFI',
      likes: 234,
      comments: 31,
      reads: 892,
      publishedAt: new Date('2024-12-05'),
      coverImage: null
    }
  ]
  
  return (
    <section className="mb-12">
      <div className="flex items-center space-x-3 mb-8">
        <TrendingUp className="h-8 w-8 text-primary-600" />
        <h2 className="text-3xl font-bold text-gray-900">Trending This Week</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {trendingStories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </section>
  )
}