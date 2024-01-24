import { useMediaQuery } from '@react-hooks-hub/use-media-query';
import cn from 'classnames';
import s from './Projects.module.css';
import Slide, { SlideProps } from 'src/components/UI/Slide/Slide';

import fol from 'src/assets/pics/fol.jpg';
import graphiql from 'src/assets/pics/graphiql.jpg';
import shelter from 'src/assets/pics/shelter.jpg';
import skateshop from 'src/assets/pics/skateshop.jpg';
import keyboard from 'src/assets/pics/keyboard.jpg';
import cssselectors from 'src/assets/pics/cssselectors.jpg';
import minesweeper from 'src/assets/pics/minesweeper.jpg';
import asyncrace from 'src/assets/pics/asyncrace.jpg';
import thissite from 'src/assets/pics/thissite.jpg';
import { Skills } from 'src/@types/models';

export default function Projects() {
  const { device } = useMediaQuery();

  const projects: SlideProps[] = [
    {
      name: 'gavrilin.online',
      img: thissite,
      description_key: 'PROJECT_DESCRIPTION_THISSITE',
      stack: [Skills.REACT, Skills.TYPESCRIPT, Skills.CSS, Skills.VITE],
      git: 'https://github.com/Ivan-Gav/personal-site',
    },
    {
      name: 'fontan-online.ru',
      img: fol,
      description_key: 'PROJECT_DESCRIPTION_FOL',
      stack: [Skills.HTML, Skills.CSS, Skills.OPENCART],
      href: 'https://fontan-online.ru',
    },
    {
      name: 'GraphiQl',
      img: graphiql,
      description_key: 'PROJECT_DESCRIPTION_GRAPHIQL',
      stack: [
        Skills.REACT,
        Skills.REDUX,
        Skills.MATERIALUI,
        Skills.GRAPHQL,
        Skills.TYPESCRIPT,
        Skills.CSS,
        Skills.VITE,
        Skills.VITEST,
      ],
      git: 'https://github.com/Ivan-Gav/graphiql-app',
      href: 'https://graphiql-app-black.vercel.app/',
    },
    {
      name: 'Shelter',
      img: shelter,
      description_key: 'PROJECT_DESCRIPTION_SHELTER',
      stack: [Skills.HTML, Skills.SCSS, Skills.JAVASCRIPT],
      git: 'https://github.com/Ivan-Gav/shelter',
      href: 'https://ivan-gav.github.io/shelter/',
    },
    {
      name: 'Skate Shop',
      img: skateshop,
      description_key: 'PROJECT_DESCRIPTION_SKATESHOP',
      stack: [
        Skills.REACT,
        Skills.TYPESCRIPT,
        Skills.SCSS,
        Skills.VITE,
        Skills.VITEST,
      ],
      git: 'https://github.com/Ivan-Gav/eCommerce-Application',
      href: 'https://e-commerce-application-roan.vercel.app/',
    },
    {
      name: 'CSS Selectors',
      img: cssselectors,
      description_key: 'PROJECT_DESCRIPTION_CSSSELECTORS',
      stack: [Skills.TYPESCRIPT, Skills.HTML, Skills.CSS, Skills.WEBPACK],
      git: 'https://github.com/Ivan-Gav/css-selectors',
      href: 'https://ivan-gav.github.io/css-selectors/',
    },
    {
      name: 'Minesweeper',
      img: minesweeper,
      description_key: 'PROJECT_DESCRIPTION_MINESWEEPER',
      stack: [Skills.JAVASCRIPT, Skills.HTML, Skills.CSS],
      git: 'https://github.com/Ivan-Gav/minesweeper',
      href: 'https://ivan-gav.github.io/minesweeper/',
    },
    {
      name: 'Virtual Keyboard',
      img: keyboard,
      description_key: 'PROJECT_DESCRIPTION_KEYBOARD',
      stack: [Skills.JAVASCRIPT, Skills.HTML, Skills.CSS],
      git: 'https://github.com/Ivan-Gav/virtual-keyboard',
      href: 'https://ivan-gav.github.io/virtual-keyboard/',
    },
    {
      name: 'Async Race',
      img: asyncrace,
      description_key: 'PROJECT_DESCRIPTION_ASYNCRACE',
      stack: [Skills.TYPESCRIPT, Skills.HTML, Skills.CSS, Skills.WEBPACK],
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
          description_key={p.description_key}
          stack={p.stack}
          git={p.git}
          href={p.href}
        />
      ))}
    </div>
  );
}
