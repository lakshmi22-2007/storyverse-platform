import { StoryCard } from '@/components/stories/StoryCard'

interface UserStoriesProps {
  username: string
}

export function UserStories({ username }: UserStoriesProps) {
  // Mock user stories - replace with real data
  const userStories = [
    {
      id: '1',
      title: 'The Last Library',
      excerpt: 'In a world where books are forbidden, Maya discovers the last hidden library and must protect it from those who would destroy knowledge forever...',
      author: { name: 'Sarah Chen', username: username },
      genre: 'SCIFI',
      likes: 342,
      comments: 28,
      reads: 1205,
      publishedAt: new Date('2024-12-01'),
      coverImage: null
    },
    {
      id: '2',
      title: 'Digital Hearts',
      excerpt: 'When AI learns to love, the boundaries between human and machine blur in unexpected ways...',
      author: { name: 'Sarah Chen', username: username },
      genre: 'ROMANCE',
      likes: 456,
      comments: 67,
      reads: 1543,
      publishedAt: new Date('2024-11-28'),
      coverImage: null
    },
    {
      id: '3',
      title: 'Echoes of Tomorrow',
      excerpt: 'A time traveler discovers that changing the past has consequences she never imagined...',
      author: { name: 'Sarah Chen', username: username },
      genre: 'SCIFI',
      likes: 289,
      comments: 34,
      reads: 892,
      publishedAt: new Date('2024-11-15'),
      coverImage: null
    }
  ]
  
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Published Stories</h2>
        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
          <option>Most Recent</option>
          <option>Most Popular</option>
          <option>Most Liked</option>
        </select>
      </div>
      
      <div className="space-y-6">
        {userStories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
      
      {userStories.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg mb-2">No stories published yet</p>
          <p>This user hasn't shared any stories with the community.</p>
        </div>
      )}
    </div>
  )
}