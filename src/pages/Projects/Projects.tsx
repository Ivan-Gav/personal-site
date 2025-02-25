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
import vuesneakers from 'src/assets/pics/vuesneakers.jpg';
import poolgame from 'src/assets/pics/poolgame.jpg';
import fitnessaction from 'src/assets/pics/fitnessaction.jpg';
import editabletable from 'src/assets/pics/editabletable.jpg';
import { SKILLS } from 'src/@types/models';

export default function Projects() {
  const { device } = useMediaQuery();

  const projects: SlideProps[] = [
    {
      name: 'Vue-sneakers',
      img: vuesneakers,
      description_key: 'PROJECT_DESCRIPTION_VUESNEAKERS',
      stack: [SKILLS.VUE, SKILLS.TAILWIND, SKILLS.VITE],
      git: 'https://github.com/Ivan-Gav/vue-sneakers',
      href: 'https://ivan-gav.github.io/vue-sneakers/',
    },
    {
      name: 'Pool game',
      img: poolgame,
      description_key: 'PROJECT_DESCRIPTION_POOLGAME',
      stack: [
        SKILLS.REACT,
        SKILLS.TYPESCRIPT,
        SKILLS.HTML,
        SKILLS.CSS,
        SKILLS.VITE,
      ],
      git: 'https://github.com/Ivan-Gav/pool-game',
      href: 'https://ivan-gav.github.io/pool-game/',
    },
    {
      name: 'gavrilin.online',
      img: thissite,
      description_key: 'PROJECT_DESCRIPTION_THISSITE',
      stack: [SKILLS.REACT, SKILLS.TYPESCRIPT, SKILLS.CSS, SKILLS.VITE],
      git: 'https://github.com/Ivan-Gav/personal-site',
    },
    {
      name: 'Editable table',
      img: editabletable,
      description_key: 'PROJECT_DESCRIPTION_INTERACTIVETABLE',
      stack: [SKILLS.VUE, SKILLS.HTML, SKILLS.CSS, SKILLS.VITE],
      git: 'https://github.com/Ivan-Gav/opt6-test',
      href: 'https://ivan-gav.github.io/opt6-test/',
    },
    {
      name: 'fontan-online.ru',
      img: fol,
      description_key: 'PROJECT_DESCRIPTION_FOL',
      stack: [SKILLS.HTML, SKILLS.CSS, SKILLS.OPENCART],
      href: 'https://fontan-online.ru',
    },
    {
      name: 'GraphiQl',
      img: graphiql,
      description_key: 'PROJECT_DESCRIPTION_GRAPHIQL',
      stack: [
        SKILLS.REACT,
        SKILLS.REDUX,
        SKILLS.MATERIALUI,
        SKILLS.GRAPHQL,
        SKILLS.TYPESCRIPT,
        SKILLS.CSS,
        SKILLS.VITE,
        SKILLS.VITEST,
      ],
      git: 'https://github.com/Ivan-Gav/graphiql-app',
      href: 'https://graphiql-app-black.vercel.app/',
    },
    {
      name: 'Shelter',
      img: shelter,
      description_key: 'PROJECT_DESCRIPTION_SHELTER',
      stack: [SKILLS.HTML, SKILLS.SCSS, SKILLS.JAVASCRIPT],
      git: 'https://github.com/Ivan-Gav/shelter',
      href: 'https://ivan-gav.github.io/shelter/',
    },
    {
      name: 'Skate Shop',
      img: skateshop,
      description_key: 'PROJECT_DESCRIPTION_SKATESHOP',
      stack: [
        SKILLS.REACT,
        SKILLS.TYPESCRIPT,
        SKILLS.SCSS,
        SKILLS.VITE,
        SKILLS.VITEST,
      ],
      git: 'https://github.com/Ivan-Gav/eCommerce-Application',
      href: 'https://e-commerce-application-roan.vercel.app/',
    },
    {
      name: 'Fitness action page',
      img: fitnessaction,
      description_key: 'PROJECT_DESCRIPTION_TIMER',
      stack: [SKILLS.REACT, SKILLS.HTML, SKILLS.CSS, SKILLS.VITE],
      git: 'https://github.com/Ivan-Gav/4a-consulting-test',
      href: 'https://ivan-gav.github.io/4a-consulting-test/',
    },
    {
      name: 'CSS Selectors',
      img: cssselectors,
      description_key: 'PROJECT_DESCRIPTION_CSSSELECTORS',
      stack: [SKILLS.TYPESCRIPT, SKILLS.HTML, SKILLS.CSS, SKILLS.WEBPACK],
      git: 'https://github.com/Ivan-Gav/css-selectors',
      href: 'https://ivan-gav.github.io/css-selectors/',
    },
    {
      name: 'Minesweeper',
      img: minesweeper,
      description_key: 'PROJECT_DESCRIPTION_MINESWEEPER',
      stack: [SKILLS.JAVASCRIPT, SKILLS.HTML, SKILLS.CSS],
      git: 'https://github.com/Ivan-Gav/minesweeper',
      href: 'https://ivan-gav.github.io/minesweeper/',
    },
    {
      name: 'Virtual Keyboard',
      img: keyboard,
      description_key: 'PROJECT_DESCRIPTION_KEYBOARD',
      stack: [SKILLS.JAVASCRIPT, SKILLS.HTML, SKILLS.CSS],
      git: 'https://github.com/Ivan-Gav/virtual-keyboard',
      href: 'https://ivan-gav.github.io/virtual-keyboard/',
    },
    {
      name: 'Async Race',
      img: asyncrace,
      description_key: 'PROJECT_DESCRIPTION_ASYNCRACE',
      stack: [SKILLS.TYPESCRIPT, SKILLS.HTML, SKILLS.CSS, SKILLS.WEBPACK],
      git: 'https://github.com/Ivan-Gav/async-race',
    },
  ];

  return (
    <section
      className={cn(s.projects_container, device === 'mobile' && s.mobile)}
    >
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
    </section>
  );
}
