import { ContestHeader } from '@/components/contest/ContestHeader'
import { ContestRules } from '@/components/contest/ContestRules'
import { ContestLeaderboard } from '@/components/contest/ContestLeaderboard'
import { SubmitStoryCard } from '@/components/contest/SubmitStoryCard'

export default function ContestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ContestHeader />
      
      <div className="grid lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-8">
          <ContestLeaderboard />
          <ContestRules />
        </div>
        
        <div className="space-y-6">
          <SubmitStoryCard />
        </div>
      </div>
    </div>
  )
}