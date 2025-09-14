import { Trophy, Calendar, BookOpen, Download } from 'lucide-react'
import Link from 'next/link'

export function MonthlyWinners() {
  const monthlyWinners = [
    {
      id: '1',
      month: 'November 2024',
      story: {
        id: 'story1',
        title: 'The Digital Garden',
        author: { name: 'Elena Vasquez', username: 'elena_writes' },
        genre: 'SCIFI',
        finalScore: 2847,
        excerpt: 'In a world where nature exists only in virtual reality, one programmer discovers a way to bring digital plants into the real world...'
      },
      bookDownloads: 1234,
      isPublished: true
    },
    {
      id: '2',
      month: 'October 2024',
      story: {
        id: 'story2',
        title: 'Letters from Tomorrow',
        author: { name: 'Michael Chang', username: 'time_writer' },
        genre: 'DRAMA',
        finalScore: 2654,
        excerpt: 'A mailman starts receiving letters addressed from the future, each one changing the course of someone\'s life...'
      },
      bookDownloads: 987,
      isPublished: true
    },
    {
      id: '3',
      month: 'September 2024',
      story: {
        id: 'story3',
        title: 'The Memory Merchant',
        author: { name: 'Sophia Kim', username: 'memory_keeper' },
        genre: 'FANTASY',
        finalScore: 2432,
        excerpt: 'In the bustling markets of Neo-Baghdad, memories are currency and Zara is the most skilled memory merchant of all...'
      },
      bookDownloads: 1456,
      isPublished: true
    },
    {
      id: '4',
      month: 'August 2024',
      story: {
        id: 'story4',
        title: 'Midnight Train to Nowhere',
        author: { name: 'Robert Taylor', username: 'night_traveler' },
        genre: 'MYSTERY',
        finalScore: 2198,
        excerpt: 'Every night at 11:47 PM, a train appears at the abandoned station. Tonight, Sarah decides to board it...'
      },
      bookDownloads: 823,
      isPublished: true
    }
  ]
  
  const genreColors = {
    FANTASY: 'bg-purple-100 text-purple-800',
    ROMANCE: 'bg-pink-100 text-pink-800',
    HORROR: 'bg-red-100 text-red-800',
    SCIFI: 'bg-blue-100 text-blue-800',
    MYSTERY: 'bg-gray-100 text-gray-800',
    DRAMA: 'bg-green-100 text-green-800',
  }
  
  return (
    <div className="space-y-6">
      {monthlyWinners.map((winner, index) => (
        <div key={winner.id} className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Trophy className="h-8 w-8 text-yellow-600" />
              <div>
                <h3 className="text-lg font-bold text-gray-900">{winner.month} Winner</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Published in Monthly Anthology</span>
                </div>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${genreColors[winner.story.genre as keyof typeof genreColors] || 'bg-gray-100 text-gray-800'}`}>
              {winner.story.genre}
            </span>
          </div>
          
          <div className="mb-4">
            <Link href={`/story/${winner.story.id}`} className="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors mb-2 block">
              {winner.story.title}
            </Link>
            <Link href={`/profile/${winner.story.author.username}`} className="text-primary-600 hover:text-primary-700 font-medium">
              by {winner.story.author.name}
            </Link>
          </div>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {winner.story.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Trophy className="h-4 w-4" />
                <span>{winner.story.finalScore} points</span>
              </div>
              <div className="flex items-center space-x-1">
                <Download className="h-4 w-4" />
                <span>{winner.bookDownloads} downloads</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Link href={`/story/${winner.story.id}`} className="btn-secondary text-sm">
                Read Story
              </Link>
              <button className="btn-primary text-sm flex items-center space-x-1">
                <Download className="h-4 w-4" />
                <span>Download Book</span>
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="text-center">
        <Link href="/books" className="btn-secondary">
          View All Monthly Books
        </Link>
      </div>
    </div>
  )
}