import { CheckCircle, Clock, Trophy, BookOpen } from 'lucide-react'

export function ContestRules() {
  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contest Rules & Guidelines</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <BookOpen className="h-5 w-5 text-primary-600 mr-2" />
            Submission Guidelines
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              Original stories only - no plagiarism or AI-generated content
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              Word limit: 500-5000 words for short stories
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              All genres welcome (Fantasy, Romance, Horror, Sci-Fi, etc.)
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              Stories must be published during the contest month
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <Clock className="h-5 w-5 text-primary-600 mr-2" />
            Timeline
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Submission Period</span>
              <span className="font-semibold text-gray-900">Dec 1-31, 2024</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Community Voting</span>
              <span className="font-semibold text-gray-900">Throughout December</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Winner Announcement</span>
              <span className="font-semibold text-gray-900">Jan 1, 2025</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Book Publication</span>
              <span className="font-semibold text-gray-900">Jan 15, 2025</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <Trophy className="h-5 w-5 text-primary-600 mr-2" />
            Prizes & Recognition
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">🥇 1st Place Winner</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Story published in monthly anthology</li>
                <li>• "Contest Winner" badge</li>
                <li>• Featured on homepage for 1 month</li>
                <li>• Certificate of achievement</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">🥈 Runner-ups (2nd-5th)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• "Top Contributor" badge</li>
                <li>• Featured in honorable mentions</li>
                <li>• Bonus points toward leaderboard</li>
                <li>• Community recognition</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 mb-2">📊 Scoring System</h4>
          <p className="text-sm text-blue-700 mb-2">Stories are ranked based on community engagement:</p>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Likes: 1 point each</li>
            <li>• Comments: 2 points each</li>
            <li>• Reads: 0.5 points each</li>
            <li>• Shares: 3 points each</li>
          </ul>
        </div>
      </div>
    </div>
  )
}