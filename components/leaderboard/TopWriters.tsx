import { Trophy, Medal, Award, PenTool, Heart, BookOpen } from 'lucide-react'
import Link from 'next/link'

export function TopWriters() {
  const topWriters = [
    {
      id: '1',
      rank: 1,
      name: 'Sarah Chen',
      username: 'sarahwrites',
      avatar: null,
      points: 2847,
      storiesCount: 23,
      totalLikes: 1456,
      totalReads: 8934,
      badges: ['Contest Winner', 'Prolific Writer', 'Community Favorite'],
      joinedDate: '2024-01-15'
    },
    {
      id: '2',
      rank: 2,
      name: 'Jordan Kim',
      username: 'techpoet',
      avatar: null,
      points: 2134,
      storiesCount: 18,
      totalLikes: 1203,
      totalReads: 6782,
      badges: ['Rising Star', 'Genre Master'],
      joinedDate: '2024-03-22'
    },
    {
      id: '3',
      rank: 3,
      name: 'Alex Rivera',
      username: 'alexstories',
      avatar: null,
      points: 1876,
      storiesCount: 15,
      totalLikes: 987,
      totalReads: 5643,
      badges: ['Consistent Creator', 'Reader\'s Choice'],
      joinedDate: '2024-02-08'
    },
    {
      id: '4',
      rank: 4,
      name: 'Emma Watson',
      username: 'emmawrites',
      avatar: null,
      points: 1654,
      storiesCount: 12,
      totalLikes: 834,
      totalReads: 4521,
      badges: ['Quality Writer'],
      joinedDate: '2024-04-12'
    },
    {
      id: '5',
      rank: 5,
      name: 'Marcus Johnson',
      username: 'quantumwriter',
      avatar: null,
      points: 1432,
      storiesCount: 14,
      totalLikes: 723,
      totalReads: 3987,
      badges: ['Sci-Fi Specialist'],
      joinedDate: '2024-05-03'
    }
  ]
  
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />
      default:
        return <div className="h-6 w-6 flex items-center justify-center text-sm font-bold text-gray-500">#{rank}</div>
    }
  }
  
  return (
    <div className="space-y-4">
      {topWriters.map((writer) => (
        <div key={writer.id} className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${
          writer.rank === 1 ? 'border-yellow-300 bg-yellow-50' :
          writer.rank === 2 ? 'border-gray-300 bg-gray-50' :
          writer.rank === 3 ? 'border-amber-300 bg-amber-50' :
          'border-gray-200 bg-white'
        }`}>
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              {getRankIcon(writer.rank)}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <Link href={`/profile/${writer.username}`} className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                    {writer.name}
                  </Link>
                  <p className="text-sm text-gray-500">@{writer.username}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-600">{writer.points}</div>
                  <div className="text-xs text-gray-500">points</div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
                    <PenTool className="h-4 w-4" />
                    <span>{writer.storiesCount}</span>
                  </div>
                  <div className="text-xs text-gray-500">Stories</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
                    <Heart className="h-4 w-4" />
                    <span>{writer.totalLikes}</span>
                  </div>
                  <div className="text-xs text-gray-500">Likes</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
                    <BookOpen className="h-4 w-4" />
                    <span>{writer.totalReads}</span>
                  </div>
                  <div className="text-xs text-gray-500">Reads</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {writer.badges.map((badge, index) => (
                  <span key={index} className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}