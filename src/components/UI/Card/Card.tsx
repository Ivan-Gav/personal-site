import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import s from './Card.module.css';
import { IconKeysType } from 'src/assets/icons/index';
import Skill from '../Skill/Skill';

type CardProps = {
  isProfile?: boolean;
  fromDate?: string;
  toDate?: string;
  company: string;
  position: string;
  location?: string;
  description: React.ReactNode | string;
  skills?: { skill: string; icon?: IconKeysType }[];
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
    description,
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
        <h4 className={s.card_company}>{company}</h4>
        {!!location && (
          <span className={s.card_location}>
            {'['}
            {location}
            {']'}
          </span>
        )}
      </div>
      <h4 className={s.card_position}>{position}</h4>
      <p className={s.card_description}>{description}</p>
      {!!skills?.length && (
        <>
          <h5 className={s.card_skills_title}>{t('SKILLS')}</h5>
          <ul className={s.card_skills_list}>
            {skills.map((skill) => (
              <Skill
                skill={skill.skill}
                icon={skill.icon}
                key={`${company}-${skill.skill}`}
              />
              // <li className={s.card_skill} key={`${company}-${skill}`}>
              //   {skill}
              // </li>
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
