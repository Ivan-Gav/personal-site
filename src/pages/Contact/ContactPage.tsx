import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@react-hooks-hub/use-media-query';

import cn from 'classnames';
import Contacts from 'src/components/Contacts/Contacts';
import ContactForm from 'src/components/ContactForm/ContactForm';
import s from './ContactPage.module.css';

export default function ContactPage() {
  const { t } = useTranslation();
  const { device } = useMediaQuery();

  return (
    <section
      className={cn(
        s.contact_page,
        device === 'tablet' && s.tablet,
        device === 'mobile' && s.mobile
      )}
    >
      <div className={s.contacts_box}>
        <h3 className={s.contacts_title}>{t('CONTACT')}</h3>
        <Contacts />
      </div>
      <div className={s.form_box}>
        <h3 className={s.contacts_title}>{t('TEXT_ME')}</h3>
        <ContactForm />
      </div>
    </section>
  );
}
