import { Hero } from '@/components/home/Hero'
import { FeaturedStories } from '@/components/home/FeaturedStories'
import { TrendingStories } from '@/components/home/TrendingStories'
import { MonthlyContest } from '@/components/home/MonthlyContest'

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Hero />
      <div className="container mx-auto px-4">
        <MonthlyContest />
        <FeaturedStories />
        <TrendingStories />
      </div>
    </div>
  )
}