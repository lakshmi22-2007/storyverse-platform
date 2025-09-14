import { Trophy, Medal, Award, BookOpen, Heart, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function TopReaders() {
  const topReaders = [
    {
      id: '1',
      rank: 1,
      name: 'Maya Patel',
      username: 'bookworm_maya',
      avatar: null,
      points: 3245,
      storiesRead: 156,
      likesGiven: 892,
      commentsPosted: 234,
      badges: ['Super Reader', 'Community Supporter', 'Feedback Master'],
      joinedDate: '2024-01-10'
    },
    {
      id: '2',
      rank: 2,
      name: 'David Chen',
      username: 'story_explorer',
      avatar: null,
      points: 2876,
      storiesRead: 134,
      likesGiven: 756,
      commentsPosted: 189,
      badges: ['Avid Reader', 'Thoughtful Commenter'],
      joinedDate: '2024-02-14'
    },
    {
      id: '3',
      rank: 3,
      name: 'Lisa Rodriguez',
      username: 'fiction_fan',
      avatar: null,
      points: 2543,
      storiesRead: 128,
      likesGiven: 634,
      commentsPosted: 167,
      badges: ['Genre Explorer', 'Encouraging Voice'],
      joinedDate: '2024-01-28'
    },
    {
      id: '4',
      rank: 4,
      name: 'James Wilson',
      username: 'reader_james',
      avatar: null,
      points: 2234,
      storiesRead: 112,
      likesGiven: 567,
      commentsPosted: 145,
      badges: ['Consistent Reader'],
      joinedDate: '2024-03-05'
    },
    {
      id: '5',
      rank: 5,
      name: 'Anna Thompson',
      username: 'story_lover',
      avatar: null,
      points: 1987,
      storiesRead: 98,
      likesGiven: 489,
      commentsPosted: 123,
      badges: ['Rising Reader'],
      joinedDate: '2024-04-18'
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
      {topReaders.map((reader) => (
        <div key={reader.id} className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${
          reader.rank === 1 ? 'border-yellow-300 bg-yellow-50' :
          reader.rank === 2 ? 'border-gray-300 bg-gray-50' :
          reader.rank === 3 ? 'border-amber-300 bg-amber-50' :
          'border-gray-200 bg-white'
        }`}>
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              {getRankIcon(reader.rank)}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <Link href={`/profile/${reader.username}`} className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                    {reader.name}
                  </Link>
                  <p className="text-sm text-gray-500">@{reader.username}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-600">{reader.points}</div>
                  <div className="text-xs text-gray-500">points</div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
                    <BookOpen className="h-4 w-4" />
                    <span>{reader.storiesRead}</span>
                  </div>
                  <div className="text-xs text-gray-500">Stories Read</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
                    <Heart className="h-4 w-4" />
                    <span>{reader.likesGiven}</span>
                  </div>
                  <div className="text-xs text-gray-500">Likes Given</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
                    <MessageCircle className="h-4 w-4" />
                    <span>{reader.commentsPosted}</span>
                  </div>
                  <div className="text-xs text-gray-500">Comments</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {reader.badges.map((badge, index) => (
                  <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
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