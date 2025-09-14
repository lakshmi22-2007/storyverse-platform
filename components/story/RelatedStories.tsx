import { StoryCard } from '@/components/stories/StoryCard'

interface RelatedStoriesProps {
  currentStoryId: string
  genre: string
}

export function RelatedStories({ currentStoryId, genre }: RelatedStoriesProps) {
  // Mock related stories data
  const relatedStories = [
    {
      id: '2',
      title: 'Digital Hearts',
      excerpt: 'When AI learns to love, the boundaries between human and machine blur in unexpected ways...',
      author: { name: 'Jordan Kim', username: 'techpoet' },
      genre: 'SCIFI',
      likes: 456,
      comments: 67,
      reads: 1543,
      publishedAt: new Date('2024-11-28'),
      coverImage: null
    },
    {
      id: '3',
      title: 'The Memory Merchant',
      excerpt: 'In the bustling markets of Neo-Baghdad, memories are currency and Zara is the most skilled memory merchant of all...',
      author: { name: 'Sophia Kim', username: 'memory_keeper' },
      genre: 'SCIFI',
      likes: 289,
      comments: 34,
      reads: 892,
      publishedAt: new Date('2024-11-15'),
      coverImage: null
    }
  ].filter(story => story.id !== currentStoryId)
  
  if (relatedStories.length === 0) {
    return null
  }
  
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">More {genre} Stories</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {relatedStories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </section>
  )
}