import text_en from 'public/locales/en/translation.json';
import { IconKeysType } from 'src/assets/icons';

export type Dictionary = keyof typeof text_en;

export type SkillName =
  | 'CSS'
  | 'Git'
  | 'GitHub'
  | 'GraphQL'
  | 'HTML'
  | 'JavaScript'
  | 'Material UI'
  | 'openCart'
  | 'React'
  | 'Redux'
  | 'SCSS'
  | 'TypeScript'
  | 'Vite'
  | 'Vitest'
  | 'Webpack'
  | 'Next.JS'
  | 'href'
  | 'Telegram'
  | 'Email'
  | 'Phone'
  | 'LinkedIn'
  | 'Discord'
  | 'Vue'
  | 'Tailwind';

export const SKILLS: { [key in IconKeysType]: SkillName } = {
  CSS: 'CSS',
  GIT: 'Git',
  GITHUB: 'GitHub',
  GRAPHQL: 'GraphQL',
  HTML: 'HTML',
  JAVASCRIPT: 'JavaScript',
  MATERIALUI: 'Material UI',
  OPENCART: 'openCart',
  REACT: 'React',
  REDUX: 'Redux',
  SCSS: 'SCSS',
  TYPESCRIPT: 'TypeScript',
  VITE: 'Vite',
  VITEST: 'Vitest',
  WEBPACK: 'Webpack',
  NEXTJS: 'Next.JS',
  HREF: 'href',
  TELEGRAM: 'Telegram',
  EMAIL: 'Email',
  PHONE: 'Phone',
  LINKEDIN: 'LinkedIn',
  DISCORD: 'Discord',
  VUE: 'Vue',
  TAILWIND: 'Tailwind',
};
