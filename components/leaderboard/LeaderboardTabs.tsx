'use client'

import { useState } from 'react'
import { TopWriters } from './TopWriters'
import { TopReaders } from './TopReaders'
import { MonthlyWinners } from './MonthlyWinners'

export function LeaderboardTabs() {
  const [activeTab, setActiveTab] = useState('writers')
  
  const tabs = [
    { id: 'writers', label: 'Top Writers', icon: '✍️' },
    { id: 'readers', label: 'Top Readers', icon: '📚' },
    { id: 'winners', label: 'Monthly Winners', icon: '🏆' }
  ]
  
  return (
    <div className="card">
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      
      <div>
        {activeTab === 'writers' && <TopWriters />}
        {activeTab === 'readers' && <TopReaders />}
        {activeTab === 'winners' && <MonthlyWinners />}
      </div>
    </div>
  )
}