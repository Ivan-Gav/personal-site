import text_en from 'public/locales/en/translation.json';

export type Dictionary = keyof typeof text_en;

export enum Skills {
  CSS = 'CSS',
  GIT = 'Git',
  GITHUB = 'GitHub',
  GRAPHQL = 'GraphQL',
  HTML = 'HTML',
  JAVASCRIPT = 'JavaScript',
  MATERIALUI = 'Material UI',
  OPENCART = 'openCart',
  REACT = 'React',
  REDUX = 'Redux',
  SCSS = 'SCSS',
  TYPESCRIPT = 'TypeScript',
  VITE = 'Vite',
  VITEST = 'Vitest',
  WEBPACK = 'Webpack',
  NEXTJS = 'Next.JS',
  HREF = 'href',
}
