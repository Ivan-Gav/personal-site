import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@react-hooks-hub/use-media-query';
import cn from 'classnames';
import s from './Slide.module.css';
import Skill from '../Skill/Skill';
import SourceLink from '../SourceLink/SourceLink';
import { useEffect } from 'react';

type SlideProps = {
  odd: boolean;
  name: string;
  img: string;
  description: string;
  stack?: string[];
  git?: string;
  href?: string;
};

export default function Slide(props: SlideProps) {
  const { name, img, description, stack, git, href, odd } = props;
  const { t } = useTranslation();
  const { device } = useMediaQuery();

  useEffect(() => console.log(device), [device]);

  return (
    <div
      className={cn(
        s.slide,
        device !== 'desktop' && s.mobile,
        odd && device === 'desktop' && s.odd
      )}
    >
      <div className={s.slide_img_container}>
        <div className={s.slide_img_frame}>
          <div className={s.slide_img}>
            <img src={img} alt={name} />
          </div>
        </div>
      </div>
      <div className={s.slide_text}>
        <h3 className={s.slide_name}>{name}</h3>
        <p className={s.slide_description}>{description}</p>
        {!!stack && !!stack.length && (
          <>
            <h4 className={s.slide_stack_title}>{t('STACK')}</h4>
            <ul className={s.slide_stack}>
              {stack.map((skill) => (
                <Skill key={`${name}-${skill}`} skill={skill} />
              ))}
            </ul>
          </>
        )}
        <div className={s.slide_links}>
          {!!git && <SourceLink type="github" text="GitHub" href={git} />}
          {!!href && <SourceLink type="href" text={t('SITE')} href={href} />}
        </div>
      </div>
    </div>
  );
}
