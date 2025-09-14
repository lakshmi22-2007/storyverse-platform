import Link from 'next/link'
import { PenTool, Upload, CheckCircle } from 'lucide-react'

export function SubmitStoryCard() {
  return (
    <div className="card bg-gradient-to-br from-primary-50 to-blue-50 border-primary-200">
      <div className="text-center mb-6">
        <PenTool className="h-12 w-12 text-primary-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Submit Your Story</h3>
        <p className="text-gray-600">Join the contest and compete for publication!</p>
      </div>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center space-x-3">
          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
          <span className="text-sm text-gray-700">Original content only</span>
        </div>
        <div className="flex items-center space-x-3">
          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
          <span className="text-sm text-gray-700">500-5000 words</span>
        </div>
        <div className="flex items-center space-x-3">
          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
          <span className="text-sm text-gray-700">Any genre welcome</span>
        </div>
        <div className="flex items-center space-x-3">
          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
          <span className="text-sm text-gray-700">Published this month</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <Link href="/write" className="btn-primary w-full flex items-center justify-center space-x-2">
          <PenTool className="h-4 w-4" />
          <span>Write New Story</span>
        </Link>
        
        <button className="btn-secondary w-full flex items-center justify-center space-x-2">
          <Upload className="h-4 w-4" />
          <span>Submit Existing Story</span>
        </button>
      </div>
      
      <div className="mt-4 p-3 bg-white rounded-lg border border-primary-200">
        <p className="text-xs text-gray-600 text-center">
          By submitting, you agree to our contest terms and conditions. 
          Winners will be contacted via email.
        </p>
      </div>
    </div>
  )
}