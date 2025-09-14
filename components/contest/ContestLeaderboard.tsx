import { Trophy, Medal, Award, Heart, MessageCircle, Eye } from 'lucide-react'
import Link from 'next/link'

export function ContestLeaderboard() {
  // Mock contest entries data
  const contestEntries = [
    {
      id: '1',
      rank: 1,
      title: 'The Last Library',
      author: { name: 'Sarah Chen', username: 'sarahwrites', avatar: null },
      genre: 'SCIFI',
      likes: 342,
      comments: 28,
      reads: 1205,
      score: 1575, // calculated score
      excerpt: 'In a world where books are forbidden, Maya discovers the last hidden library...'
    },
    {
      id: '2',
      rank: 2,
      title: 'Digital Hearts',
      author: { name: 'Jordan Kim', username: 'techpoet', avatar: null },
      genre: 'ROMANCE',
      likes: 298,
      comments: 45,
      reads: 987,
      score: 1330,
      excerpt: 'When AI learns to love, the boundaries between human and machine blur...'
    },
    {
      id: '3',
      rank: 3,
      title: 'Midnight Coffee',
      author: { name: 'Alex Rivera', username: 'alexstories', avatar: null },
      genre: 'MYSTERY',
      likes: 267,
      comments: 34,
      reads: 892,
      score: 1193,
      excerpt: 'Every night at 3 AM, the coffee shop serves customers who shouldn\'t exist...'
    },
    {
      id: '4',
      rank: 4,
      title: 'The Memory Thief',
      author: { name: 'Emma Watson', username: 'emmawrites', avatar: null },
      genre: 'HISTORICAL',
      likes: 189,
      comments: 23,
      reads: 756,
      score: 968,
      excerpt: 'In Victorian London, someone is stealing memories from the wealthy elite...'
    },
    {
      id: '5',
      rank: 5,
      title: 'Quantum Café',
      author: { name: 'Marcus Johnson', username: 'quantumwriter', avatar: null },
      genre: 'SCIFI',
      likes: 156,
      comments: 19,
      reads: 634,
      score: 809,
      excerpt: 'A coffee shop that exists in multiple dimensions serves very unusual customers...'
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
  
  const genreColors = {
    FANTASY: 'bg-purple-100 text-purple-800',
    ROMANCE: 'bg-pink-100 text-pink-800',
    HORROR: 'bg-red-100 text-red-800',
    SCIFI: 'bg-blue-100 text-blue-800',
    MYSTERY: 'bg-gray-100 text-gray-800',
    HISTORICAL: 'bg-amber-100 text-amber-800',
  }
  
  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contest Leaderboard</h2>
      
      <div className="space-y-4">
        {contestEntries.map((entry) => (
          <div key={entry.id} className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${
            entry.rank === 1 ? 'border-yellow-300 bg-yellow-50' :
            entry.rank === 2 ? 'border-gray-300 bg-gray-50' :
            entry.rank === 3 ? 'border-amber-300 bg-amber-50' :
            'border-gray-200 bg-white'
          }`}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {getRankIcon(entry.rank)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <Link href={`/story/${entry.id}`} className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                    {entry.title}
                  </Link>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${genreColors[entry.genre as keyof typeof genreColors] || 'bg-gray-100 text-gray-800'}`}>
                    {entry.genre}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {entry.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <Link href={`/profile/${entry.author.username}`} className="text-sm text-gray-600 hover:text-primary-600">
                    by {entry.author.name}
                  </Link>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{entry.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{entry.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{entry.reads}</span>
                    </div>
                    <div className="font-semibold text-primary-600">
                      {entry.score} pts
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Link href="/discover" className="btn-secondary">
          View All Contest Entries
        </Link>
      </div>
    </div>
  )
}