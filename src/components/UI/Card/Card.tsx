import { useTranslation } from 'react-i18next';
import s from './Card.module.css';

type CardProps = {
  fromDate: string;
  toDate: string;
  company: string;
  position: string;
  location?: string;
  description: React.ReactNode | string;
  skills?: (React.ReactNode | string)[];
  link?: { href: string; text: string };
};

export default function Card(props: CardProps) {
  const {
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
    <div className={s.card}>
      <div className={s.card_dates}>
        {fromDate}
        {' - '}
        {toDate}
      </div>
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
      <div className={s.card_position}>{position}</div>
      <div className={s.card_description}>{description}</div>
      {!!skills && (
        <>
          <h5 className={s.card_skills_title}>{t('SKILLS')}</h5>
          <ul className={s.card_skills_list}>
            {skills.map((skill) => (
              <li className={s.card_skill} key={`${company}-${skill}`}>
                {skill}
              </li>
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
