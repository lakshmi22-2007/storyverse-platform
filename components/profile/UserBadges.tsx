interface UserBadgesProps {
  badges: Array<{
    id: string
    name: string
    icon: string
    description: string
  }>
}

export function UserBadges({ badges }: UserBadgesProps) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
      
      <div className="space-y-3">
        {badges.map((badge) => (
          <div key={badge.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="text-2xl">{badge.icon}</div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-900">{badge.name}</h4>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {badges.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No badges earned yet</p>
          <p className="text-sm">Start writing and engaging to earn achievements!</p>
        </div>
      )}
    </div>
  )
}