import { StoryCard } from '@/components/stories/StoryCard'

export function FeaturedStories() {
  // Mock data - replace with real data from database
  const featuredStories = [
    {
      id: '1',
      title: 'The Last Library',
      excerpt: 'In a world where books are forbidden, Maya discovers the last hidden library...',
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
      excerpt: 'Every night at 3 AM, the coffee shop serves customers who shouldn\'t exist...',
      author: { name: 'Alex Rivera', username: 'alexstories' },
      genre: 'MYSTERY',
      likes: 298,
      comments: 45,
      reads: 987,
      publishedAt: new Date('2024-12-02'),
      coverImage: null
    },
    {
      id: '3',
      title: 'Digital Hearts',
      excerpt: 'When AI learns to love, the boundaries between human and machine blur...',
      author: { name: 'Jordan Kim', username: 'techpoet' },
      genre: 'ROMANCE',
      likes: 456,
      comments: 67,
      reads: 1543,
      publishedAt: new Date('2024-12-03'),
      coverImage: null
    }
  ]
  
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Stories</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredStories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </section>
  )
}