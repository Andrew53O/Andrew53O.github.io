export interface Video {
  id: string;
  title: string;
  description?: string;
  videoUrl: string; // YouTube embed URL or Cloudflare Stream URL
  thumbnail?: string;
  tags: string[];
}

export const videos: Video[] = [
  {
    id: '1',
    title: 'Corporate Promo Video',
    description: 'Professional corporate video with English and Chinese subtitles',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['Corporate', 'Promo', 'English', 'Chinese'],
  },
  {
    id: '2',
    title: 'Product Launch Event',
    description: 'Event coverage with Indonesian subtitles',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['Event', 'Product', 'Indonesian'],
  },
  {
    id: '3',
    title: 'Educational Tutorial',
    description: 'Tutorial video with multilingual support',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['Tutorial', 'Educational', 'English'],
  },
  {
    id: '4',
    title: 'Brand Story',
    description: 'Emotional brand storytelling',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['Brand', 'Story', 'Chinese'],
  },
  {
    id: '5',
    title: 'Social Media Campaign',
    description: 'Fast-paced social media content',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['Social Media', 'Campaign', 'Indonesian'],
  },
  {
    id: '6',
    title: 'Documentary Short',
    description: 'Short documentary with professional subtitles',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['Documentary', 'English', 'Chinese'],
  },
];

export const allTags = Array.from(new Set(videos.flatMap(v => v.tags))).sort();
