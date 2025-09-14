import { Calendar, Trophy, Users } from 'lucide-react'

export function MonthlyContest() {
  // Mock data - replace with real data
  const currentMonth = "December 2024"
  const daysLeft = 18
  const submissions = 247
  
  return (
    <section className="mb-12">
      <div className="card bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Trophy className="h-8 w-8 text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-900">Monthly Contest</h2>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">Contest Period</div>
            <div className="font-semibold text-gray-900">{currentMonth}</div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <Calendar className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{daysLeft}</div>
            <div className="text-sm text-gray-600">Days Left</div>
          </div>
          <div className="text-center">
            <Users className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{submissions}</div>
            <div className="text-sm text-gray-600">Submissions</div>
          </div>
          <div className="text-center">
            <Trophy className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">1st</div>
            <div className="text-sm text-gray-600">Gets Published</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 border border-yellow-200">
          <h3 className="font-semibold text-gray-900 mb-2">How It Works</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Submit your best original story this month</li>
            <li>• Community votes through likes and engagement</li>
            <li>• Top story gets published in our monthly anthology</li>
            <li>• Winner receives recognition and special badges</li>
          </ul>
        </div>
      </div>
    </section>
  )
}