import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@react-hooks-hub/use-media-query';
import cn from 'classnames';
import s from './Projects.module.css';
import Slide from 'src/components/UI/Slide/Slide';

import fol from 'src/assets/pics/fol.jpg';
import graphiql from 'src/assets/pics/graphiql.jpg';
import shelter from 'src/assets/pics/shelter.jpg';
import skateshop from 'src/assets/pics/skateshop.jpg';
import keyboard from 'src/assets/pics/keyboard.jpg';
import cssselectors from 'src/assets/pics/cssselectors.jpg';
import minesweeper from 'src/assets/pics/minesweeper.jpg';
import asyncrace from 'src/assets/pics/asyncrace.jpg';
import thissite from 'src/assets/pics/thissite.jpg';

export default function Projects() {
  const { t } = useTranslation();
  const { device } = useMediaQuery();

  const projects = [
    {
      name: 'gavrilin.online',
      img: thissite,
      description: t('PROJECT_DESCRIPTION_THISSITE'),
      stack: ['React', 'TypeScript', 'CSS', 'Vite'],
      git: 'https://github.com/Ivan-Gav/personal-site',
    },
    {
      name: 'fontan-online.ru',
      img: fol,
      description: t('PROJECT_DESCRIPTION_FOL'),
      stack: ['HTML', 'CSS', 'openCart'],
      href: 'https://fontan-online.ru',
    },
    {
      name: 'GraphiQl',
      img: graphiql,
      description: t('PROJECT_DESCRIPTION_GRAPHIQL'),
      stack: [
        'React',
        'Redux',
        'Material UI',
        'GraphQL',
        'TypeScript',
        'CSS',
        'Vite',
        'Vitest',
      ],
      git: 'https://github.com/Ivan-Gav/graphiql-app',
      href: 'https://graphiql-app-black.vercel.app/',
    },
    {
      name: 'Shelter',
      img: shelter,
      description: t('PROJECT_DESCRIPTION_SHELTER'),
      stack: ['HTML', 'SCSS', 'JavaScript'],
      git: 'https://github.com/Ivan-Gav/shelter',
      href: 'https://ivan-gav.github.io/shelter/',
    },
    {
      name: 'Skate Shop',
      img: skateshop,
      description: t('PROJECT_DESCRIPTION_SKATESHOP'),
      stack: ['React', 'TypeScript', 'SCSS', 'Vite', 'Vitest'],
      git: 'https://github.com/Ivan-Gav/eCommerce-Application',
      href: 'https://e-commerce-application-roan.vercel.app/',
    },
    {
      name: 'CSS Selectors',
      img: cssselectors,
      description: t('PROJECT_DESCRIPTION_CSSSELECTORS'),
      stack: ['TypeScript', 'HTML', 'CSS', 'Webpack'],
      git: 'https://github.com/Ivan-Gav/css-selectors',
      href: 'https://ivan-gav.github.io/css-selectors/',
    },
    {
      name: 'Minesweeper',
      img: minesweeper,
      description: t('PROJECT_DESCRIPTION_MINESWEEPER'),
      stack: ['JavaScript', 'HTML', 'CSS'],
      git: 'https://github.com/Ivan-Gav/minesweeper',
      href: 'https://ivan-gav.github.io/minesweeper/',
    },
    {
      name: 'Virtual Keyboard',
      img: keyboard,
      description: t('PROJECT_DESCRIPTION_KEYBOARD'),
      stack: ['JavaScript', 'HTML', 'CSS'],
      git: 'https://github.com/Ivan-Gav/virtual-keyboard',
      href: 'https://ivan-gav.github.io/virtual-keyboard/',
    },
    {
      name: 'Async Race',
      img: asyncrace,
      description: t('PROJECT_DESCRIPTION_ASYNCRACE'),
      stack: ['TypeScript', 'HTML', 'CSS', 'Webpack'],
      git: 'https://github.com/Ivan-Gav/async-race',
    },
  ];

  return (
    <div className={cn(s.projects_container, device === 'mobile' && s.mobile)}>
      {projects.map((p, i) => (
        <Slide
          odd={!!(i % 2)}
          key={p.name}
          name={p.name}
          img={p.img}
          description={p.description}
          stack={p.stack}
          git={p.git}
          href={p.href}
        />
      ))}
    </div>
  );
}
