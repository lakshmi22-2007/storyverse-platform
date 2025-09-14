import { Trophy, Calendar, Users, Award } from 'lucide-react'

export function ContestHeader() {
  const currentMonth = "December 2024"
  const daysLeft = 18
  const totalSubmissions = 247
  const prize = "Publication + Recognition"
  
  return (
    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-200">
      <div className="text-center mb-8">
        <Trophy className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Monthly Writing Contest</h1>
        <p className="text-xl text-gray-600">Compete for publication and community recognition</p>
      </div>
      
      <div className="grid md:grid-cols-4 gap-6">
        <div className="text-center">
          <Calendar className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{daysLeft}</div>
          <div className="text-sm text-gray-600">Days Remaining</div>
        </div>
        
        <div className="text-center">
          <Users className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{totalSubmissions}</div>
          <div className="text-sm text-gray-600">Total Submissions</div>
        </div>
        
        <div className="text-center">
          <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-lg font-bold text-gray-900">1st Place</div>
          <div className="text-sm text-gray-600">Gets Published</div>
        </div>
        
        <div className="text-center">
          <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-lg font-bold text-gray-900">Winner</div>
          <div className="text-sm text-gray-600">Special Badges</div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-yellow-300">
          <span className="text-sm font-medium text-gray-700">Contest Period:</span>
          <span className="text-sm font-bold text-yellow-700">{currentMonth}</span>
        </div>
      </div>
    </div>
  )
}