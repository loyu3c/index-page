
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'notion-site',
    title: 'Loyu3C 個人網站',
    description: '整合個人經歷、技術棧與生活紀錄的 Notion 數位基地。',
    url: 'https://loyu3c.notion.site/',
    imageUrl: 'https://picsum.photos/seed/notion/800/600',
    tags: ['Notion', 'Portfolio', 'Experience'],
    category: 'Website',
    featured: true
  },
  {
    id: 'water-helper',
    title: 'AI 水電智能估價助手',
    description: '利用 AI 技術協助水電師傅與客戶進行精準、快速的線上成本估算與材料列清。',
    url: 'https://loyu3c.github.io/water-helper/',
    imageUrl: 'https://picsum.photos/seed/water/800/600',
    tags: ['AI', 'Utility', 'Construction'],
    category: 'App',
    featured: true
  },
  {
    id: 'repair-system',
    title: '手機版線上報修系統',
    description: '輕量化、直覺的行動端報修流程，優化客戶服務與工單追蹤效率。',
    url: 'https://loyu3c.zeabur.app/',
    imageUrl: 'https://picsum.photos/seed/repair/800/600',
    tags: ['Service', 'SaaS', 'Mobile'],
    category: 'System',
    featured: true
  }
];
