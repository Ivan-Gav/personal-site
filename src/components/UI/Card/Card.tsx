import { Trans, useTranslation } from 'react-i18next';
import cn from 'classnames';
import s from './Card.module.css';
import Skill from '../Skill/Skill';
import { Dictionary, SkillName } from 'src/@types/models';

type CardProps = {
  isProfile?: boolean;
  fromDate?: string;
  toDate?: string;
  company: string;
  position: string;
  location?: string;
  description_key: Dictionary;
  skills?: (SkillName | string)[];
  link?: { href: string; text: string };
};

export default function Card(props: CardProps) {
  const {
    isProfile,
    fromDate,
    toDate,
    company,
    location,
    position,
    description_key,
    skills,
    link,
  } = props;

  const { t } = useTranslation();

  return (
    <div className={cn(s.card, isProfile && s.profile)}>
      {!!fromDate && !!toDate && (
        <div className={s.card_dates}>
          {fromDate}
          {' - '}
          {toDate}
        </div>
      )}
      <div className={s.card_title}>
        <h4 className={s.card_company}>
          {company}
          {!!location && (
            <span className={s.card_location}>
              {' ['}
              {location}
              {']'}
            </span>
          )}
        </h4>
      </div>
      <h4 className={s.card_position}>{position}</h4>
      <p className={s.card_description}>
        <Trans i18nKey={description_key} />
      </p>
      {!!skills?.length && (
        <>
          <h5 className={s.card_skills_title}>{t('SKILLS')}</h5>
          <ul className={s.card_skills_list}>
            {skills.map((skill) => (
              <Skill skill={skill} key={`${company}-${skill}`} />
            ))}
          </ul>
        </>
      )}
      {!!link && (
        <a
          className={s.card_link}
          href={link.href}
          target="_blank"
          rel="noreferrer"
        >
          {link.text}
        </a>
      )}
    </div>
  );
}
