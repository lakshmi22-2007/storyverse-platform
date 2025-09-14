import { Calendar, MapPin, Link as LinkIcon, Users, UserPlus } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

interface ProfileHeaderProps {
  user: {
    id: string
    name: string
    username: string
    bio: string
    avatar: string | null
    joinedDate: Date
    followers: number
    following: number
    points: number
  }
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="card">
      <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
        <div className="flex-shrink-0">
          <div className="h-24 w-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">
              {user.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-600">@{user.username}</p>
            </div>
            
            <div className="flex items-center space-x-3 mt-4 sm:mt-0">
              <button className="btn-primary flex items-center space-x-2">
                <UserPlus className="h-4 w-4" />
                <span>Follow</span>
              </button>
              <button className="btn-secondary">
                Message
              </button>
            </div>
          </div>
          
          <p className="text-gray-700 mb-4">{user.bio}</p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Joined {formatDistanceToNow(user.joinedDate, { addSuffix: true })}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span><strong>{user.followers}</strong> followers</span>
              </div>
              <div>
                <span><strong>{user.following}</strong> following</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-1">
              <span className="text-primary-600 font-semibold">{user.points} points</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}