# StoryVerse - Social Storytelling Platform

A community-driven platform where writers share original stories, engage with readers, and compete for monthly publication opportunities.

## 🌟 Features

- **Story Submission**: Post short stories, poems, or serialized chapters
- **Community Engagement**: Like, comment, and share stories with emoji reactions
- **Discovery & Ranking**: Trending stories with category filtering
- **Monthly Contests**: Top stories get published into community books
- **Gamification**: Points, leaderboards, and achievement badges
- **Publishing**: Winners get their stories compiled into downloadable books

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up the database:
```bash
npx prisma db push
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](https://storyverse-platform.vercel.app/) in your browser.

## 🏗️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Prisma ORM
- **Authentication**: NextAuth.js
- **UI Components**: Lucide React icons

## 📁 Project Structure

```
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
├── lib/                # Utilities and configurations
├── prisma/             # Database schema and migrations
└── public/             # Static assets
```
