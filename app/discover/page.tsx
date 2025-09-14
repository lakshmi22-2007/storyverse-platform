import { StoryGrid } from '@/components/stories/StoryGrid'
import { GenreFilter } from '@/components/stories/GenreFilter'
import { SearchBar } from '@/components/ui/SearchBar'

export default function DiscoverPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Discover Stories</h1>
        <p className="text-gray-600">Explore amazing stories from our community of writers</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64">
          <div className="space-y-6">
            <SearchBar />
            <GenreFilter />
          </div>
        </aside>
        
        <main className="flex-1">
          <StoryGrid />
        </main>
      </div>
    </div>
  )
}