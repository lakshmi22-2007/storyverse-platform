import { ProfileHeader } from '@/components/profile/ProfileHeader'
import { ProfileStats } from '@/components/profile/ProfileStats'
import { UserStories } from '@/components/profile/UserStories'
import { UserBadges } from '@/components/profile/UserBadges'

interface ProfilePageProps {
  params: {
    username: string
  }
}

export default function ProfilePage({ params }: ProfilePageProps) {
  // Mock user data - replace with real data from database
  const user = {
    id: '1',
    name: 'Sarah Chen',
    username: params.username,
    bio: 'Passionate storyteller exploring the boundaries between science fiction and human emotion. Published author and community contributor.',
    avatar: null,
    joinedDate: new Date('2024-01-15'),
    points: 2847,
    followers: 234,
    following: 89,
    storiesCount: 23,
    totalLikes: 1456,
    totalReads: 8934,
    badges: [
      { id: '1', name: 'Contest Winner', icon: '🏆', description: 'Won monthly contest' },
      { id: '2', name: 'Prolific Writer', icon: '✍️', description: 'Published 20+ stories' },
      { id: '3', name: 'Community Favorite', icon: '❤️', description: 'Received 1000+ likes' }
    ]
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <ProfileHeader user={user} />
        
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <UserStories username={params.username} />
          </div>
          
          <div className="space-y-6">
            <ProfileStats user={user} />
            <UserBadges badges={user.badges} />
          </div>
        </div>
      </div>
    </div>
  )
}