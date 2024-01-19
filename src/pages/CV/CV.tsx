// import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@react-hooks-hub/use-media-query';
import cn from 'classnames';
import s from './CV.module.css';

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

function Card(props: CardProps) {
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
          <h5 className={s.card_skills_title}>Навыки</h5>
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

export default function CV() {
  // const { t } = useTranslation();
  const { device } = useMediaQuery({ debounceDelay: 30 });

  return (
    <section className={s.cv}>
      {/* <h2>{t('CV')}</h2> */}
      <div className={cn(s.cv_box, device === 'mobile' && s.mobile)}>
        <div className={s.cv_exp}>
          <h3 className={s.cv_exp_title}>Опыт</h3>
          <Card
            fromDate="2012"
            toDate="настоящее время"
            company="fontan-online.ru"
            location="Москва"
            position="Индивидуальный предприниматель"
            description="Работаю как ИП, у меня небольшой интернет-магазин на openCart, который я создал с нуля. Делать магазин было интересно, но сейчас всё время занимает рутина, связанная с обработкой заказов, бухгалтерией итд. В 2022 году  решил сменить поле деятельности и прошел обучение на frontend-разработчика"
            skills={['HTML', 'CSS', 'openCart']}
          />
          <Card
            fromDate="2000"
            toDate="2012"
            company="ОСКО, Штибель Эльтрон, Гидропластика"
            location="Москва"
            position="Коммерческий директор"
            description="Работал в области продаж фонтанного и отопительного оборудования немецких компаний. Прошел путь от менеджера по продажам до коммерческого директора. Осуществлял техническое косультирование клиентов, управление отделом продаж, планирование продаж, ведение ключевых клиентов."
            skills={['продажи', 'менеджмент']}
          />
        </div>
        <div className={s.cv_edu}>
          <h3 className={s.cv_exp_title}>Образование</h3>
          <Card
            fromDate="10.2023"
            toDate="01.2024"
            company="Rolling Scopes School"
            position="Frontend разработчик"
            description="Курс React 2023 Q4 закончил на 24 месте из 1080 студентов. В рамках курса было выполнено несколько проектов, в том числе, командный проект по созданию онлайн-редактора GraphQL запросов."
            skills={[
              'React',
              'Redux',
              'Material UI',
              'GraphQL',
              'JavaScript',
              'TypeScript',
              'Git',
              'Vite',
              'Vitest',
            ]}
            link={{
              href: 'https://app.rs.school/certificate/gd6t14w7',
              text: '[сертификат]',
            }}
          />
          <Card
            fromDate="03.2023"
            toDate="10.2023"
            company="Rolling Scopes School"
            position="Frontend разработчик"
            description="Курс JAVASCRIPT/FRONT-END 2023Q1 я закончил 46 из более чем 5 тысяч студентов. В рамках обучения был выполнен ряд проектов, в том числе финальный командный проект по созданию e-commerce приложения на основе сервиса commerce tools."
            skills={[
              'JavaScript',
              'Git',
              'React',
              'TypeScript',
              'Webpack',
              'Vite',
              'Vitest',
              'SCSS',
              'HTML',
              'CSS',
            ]}
            link={{
              href: 'https://app.rs.school/certificate/e1mh0dpb',
              text: '[сертификат]',
            }}
          />
          <Card
            fromDate="1993"
            toDate="1999"
            company="Московский энергетический институт"
            location="Москва"
            position="Инженер-электрик"
            description="Факультет электрооборудования и автоматизации промышленности и транспорта, Специальность: электропривод и автоматика промышленных установок и технологических комплексов"
          />
          <h3 className={s.cv_exp_title}>Иностранные языки</h3>
          <ul className={s.cv_list}>
            <li>
              <span>Английский</span> - B1+{' '}
              <a
                href="https://englex.ru/certificate/?hash=ykxkVcEF46mqEBeRuBeycHvmvAhvG5Lc0P74QMIgDkZ9iqKBK6hrR2H0CbFCkhdN"
                target="blank"
              >
                [сертификат]
              </a>
            </li>
            <li>
              <span>Немецкий</span> - B1
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
