import { useTranslation, Trans } from 'react-i18next';
import { useMediaQuery } from '@react-hooks-hub/use-media-query';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';
import s from './Slide.module.css';
import Skill from '../Skill/Skill';
import SourceLink from '../SourceLink/SourceLink';
import { Dictionary, SkillName } from 'src/@types/models';

export type SlideProps = {
  odd?: boolean;
  name: string;
  img: string;
  description_key: Dictionary;
  stack?: SkillName[];
  git?: string;
  href?: string;
};

export default function Slide(props: SlideProps) {
  const { name, img, description_key, stack, git, href, odd } = props;
  const { t } = useTranslation();
  const { device } = useMediaQuery();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={cn(
        s.slide,
        device !== 'desktop' && s.mobile,
        odd && device === 'desktop' && s.odd,
        inView && s.active
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
        <p className={s.slide_description}>
          <Trans i18nKey={description_key} />
        </p>
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
          {!!git && <SourceLink skill="github" text="GitHub" href={git} />}
          {!!href && <SourceLink skill="href" text={t('SITE')} href={href} />}
        </div>
      </div>
    </div>
  );
}
