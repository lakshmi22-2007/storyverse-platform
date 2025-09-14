import { StoryEditor } from '@/components/stories/StoryEditor'

export default function WritePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Write Your Story</h1>
        <StoryEditor />
      </div>
    </div>
  )
}