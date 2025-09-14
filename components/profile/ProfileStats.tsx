import { PenTool, Heart, Eye, Trophy } from 'lucide-react'

interface ProfileStatsProps {
  user: {
    storiesCount: number
    totalLikes: number
    totalReads: number
    points: number
  }
}

export function ProfileStats({ user }: ProfileStatsProps) {
  const stats = [
    {
      label: 'Stories Published',
      value: user.storiesCount,
      icon: <PenTool className="h-5 w-5 text-blue-500" />,
      color: 'bg-blue-50'
    },
    {
      label: 'Total Likes',
      value: user.totalLikes,
      icon: <Heart className="h-5 w-5 text-red-500" />,
      color: 'bg-red-50'
    },
    {
      label: 'Total Reads',
      value: user.totalReads,
      icon: <Eye className="h-5 w-5 text-green-500" />,
      color: 'bg-green-50'
    },
    {
      label: 'Total Points',
      value: user.points,
      icon: <Trophy className="h-5 w-5 text-yellow-500" />,
      color: 'bg-yellow-50'
    }
  ]
  
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Statistics</h3>
      
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className={`p-3 rounded-lg ${stat.color}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {stat.icon}
                <span className="text-sm font-medium text-gray-700">{stat.label}</span>
              </div>
              <span className="text-lg font-bold text-gray-900">{stat.value.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}