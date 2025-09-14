import { Award, Star, Zap, Crown } from 'lucide-react'
import Link from 'next/link'

export function RecentAchievements() {
  const recentAchievements = [
    {
      id: '1',
      user: { name: 'Sarah Chen', username: 'sarahwrites' },
      badge: 'Contest Winner',
      description: 'Won December 2024 contest',
      icon: '🏆',
      timestamp: '2 hours ago',
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: '2',
      user: { name: 'Maya Patel', username: 'bookworm_maya' },
      badge: 'Super Reader',
      description: 'Read 100+ stories this month',
      icon: '📚',
      timestamp: '5 hours ago',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: '3',
      user: { name: 'Jordan Kim', username: 'techpoet' },
      badge: 'Rising Star',
      description: 'Gained 500+ likes in a week',
      icon: '⭐',
      timestamp: '1 day ago',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      id: '4',
      user: { name: 'Alex Rivera', username: 'alexstories' },
      badge: 'Prolific Writer',
      description: 'Published 10 stories this month',
      icon: '✍️',
      timestamp: '2 days ago',
      color: 'bg-green-100 text-green-800'
    },
    {
      id: '5',
      user: { name: 'Emma Watson', username: 'emmawrites' },
      badge: 'Community Favorite',
      description: 'Story featured on homepage',
      icon: '❤️',
      timestamp: '3 days ago',
      color: 'bg-pink-100 text-pink-800'
    }
  ]
  
  return (
    <div className="card">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
        <Award className="h-6 w-6 text-primary-600 mr-2" />
        Recent Achievements
      </h3>
      
      <div className="space-y-4">
        {recentAchievements.map((achievement) => (
          <div key={achievement.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="text-2xl">{achievement.icon}</div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <Link href={`/profile/${achievement.user.username}`} className="font-medium text-gray-900 hover:text-primary-600 transition-colors">
                  {achievement.user.name}
                </Link>
                <span className="text-sm text-gray-500">earned</span>
              </div>
              
              <div className="flex items-center space-x-2 mb-1">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${achievement.color}`}>
                  {achievement.badge}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-1">{achievement.description}</p>
              <p className="text-xs text-gray-500">{achievement.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Link href="/badges" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          View All Badges →
        </Link>
      </div>
    </div>
  )
}