import { useEffect, useState } from 'react';
import { useMediaQuery } from '@react-hooks-hub/use-media-query';
import { useTranslation } from 'react-i18next';

import cn from 'classnames';
import Btn from '../UI/Btn/Btn';
import s from './ContactForm.module.css';
import { Link } from 'react-router-dom';
import Checkbox from '../UI/Checkbox/Checkbox';

export default function ContactForm() {
  const [active, setActive] = useState(false);
  const { device } = useMediaQuery();
  const { t } = useTranslation();

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <form
      action=""
      className={cn(
        s.form,
        active && s.active,
        device === 'tablet' && s.tablet,
        device === 'mobile' && s.mobile
      )}
      onSubmit={() => {}}
      noValidate
    >
      <div className={s.name_box}>
        <label htmlFor="name" className={s.label}>
          {t('NAME')}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={() => {}}
          className={cn(s.input, s.name)}
        />
        <div className={s.error}>Error message</div>
      </div>
      <div className={s.email_box}>
        <label htmlFor="email" className={s.label}>
          {t('EMAIL')}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={() => {}}
          className={cn(s.input, s.email)}
        />
        <div className={s.error}>{false && 'Error message'}</div>
      </div>
      <div className={s.message_box}>
        <label htmlFor="message" className={s.label}>
          {t('MESSAGE')}
        </label>
        <textarea
          id="message"
          name="message"
          onChange={() => {}}
          className={cn(s.input, s.message)}
        />
        <div className={s.error}>Error message</div>
      </div>
      <div className={s.privacy_box}>
        <Checkbox
          onChange={() => {}}
          id="privacy"
          name="privacy"
          className={s.privacy}
        />
        <span>
          {t('I_ACCEPT_1')}
          <Link to="/privacy" className={s.privacy_link}>
            {t('PRIVACY_POLICY_TO_ACCEPT')}
          </Link>
          {t('I_ACCEPT_2')}
        </span>
      </div>
      <div className={s.btn_box}>
        <Btn onClick={() => {}} type="submit" disabled={false}>
          {t('SEND')}
        </Btn>
      </div>
    </form>
  );
}
