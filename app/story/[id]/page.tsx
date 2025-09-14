import { StoryContent } from '@/components/story/StoryContent'
import { StoryActions } from '@/components/story/StoryActions'
import { StoryComments } from '@/components/story/StoryComments'
import { RelatedStories } from '@/components/story/RelatedStories'

interface StoryPageProps {
  params: {
    id: string
  }
}

export default function StoryPage({ params }: StoryPageProps) {
  // Mock story data - replace with real data from database
  const story = {
    id: params.id,
    title: 'The Last Library',
    content: `In a world where books are forbidden, Maya discovers the last hidden library.

The rain hammered against the cracked windows of the abandoned subway station as Maya descended the rusted stairs. She clutched the torn piece of paper in her pocket—the map that had cost her three months' rations and nearly her life to obtain.

"Third tunnel on the left," she whispered to herself, her voice echoing in the empty corridors. "Past the old turnstiles, through the maintenance door marked with a red X."

The government had burned the last public library fifteen years ago, declaring books "dangerous relics of a chaotic past." But rumors persisted of a secret collection, hidden deep beneath the city, tended by a mysterious group called the Keepers.

Maya had been searching for two years, ever since she'd found her grandmother's diary hidden in the walls of their apartment. The diary spoke of stories that could transport you to other worlds, of knowledge that could change everything, of the power that lay dormant in the written word.

As she pushed open the maintenance door, a warm golden light spilled into the tunnel. Maya gasped. Before her stretched the most beautiful sight she had ever seen: thousands upon thousands of books, their spines creating a rainbow of colors that seemed to glow in the lamplight.

An elderly woman emerged from between the stacks, her eyes twinkling with the same warmth as the lights above.

"Welcome, child," she said softly. "We've been waiting for you."

Maya stepped forward, tears streaming down her face. She was home.

But outside, the sound of boots echoed in the tunnels. The Enforcement Division had found them at last.`,
    excerpt: 'In a world where books are forbidden, Maya discovers the last hidden library and must protect it from those who would destroy knowledge forever...',
    author: { 
      id: '1',
      name: 'Sarah Chen', 
      username: 'sarahwrites',
      avatar: null,
      bio: 'Passionate storyteller exploring the boundaries between science fiction and human emotion.'
    },
    genre: 'SCIFI',
    likes: 342,
    comments: 28,
    reads: 1205,
    publishedAt: new Date('2024-12-01'),
    updatedAt: new Date('2024-12-01'),
    coverImage: null,
    wordCount: 287,
    readingTime: 2,
    tags: ['dystopian', 'books', 'rebellion', 'hope']
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <StoryContent story={story} />
        <StoryActions story={story} />
        <StoryComments storyId={params.id} />
        <RelatedStories currentStoryId={params.id} genre={story.genre} />
      </div>
    </div>
  )
}