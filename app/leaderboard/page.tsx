import { LeaderboardTabs } from '@/components/leaderboard/LeaderboardTabs'
import { TopWriters } from '@/components/leaderboard/TopWriters'
import { TopReaders } from '@/components/leaderboard/TopReaders'
import { RecentAchievements } from '@/components/leaderboard/RecentAchievements'

export default function LeaderboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Leaderboard</h1>
        <p className="text-xl text-gray-600">Celebrating our most active writers and readers</p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <LeaderboardTabs />
        </div>
        
        <div className="space-y-6">
          <RecentAchievements />
        </div>
      </div>
    </div>
  )
}