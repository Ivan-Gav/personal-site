import { useEffect, useState } from 'react';
import { useMediaQuery } from '@react-hooks-hub/use-media-query';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import cn from 'classnames';
import Btn from '../UI/Btn/Btn';
import s from './ContactForm.module.css';
import { Link } from 'react-router-dom';

export default function ContactForm() {
  const [active, setActive] = useState(false);
  const { device } = useMediaQuery();
  const { t, i18n } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
      privacy: undefined,
      lang: '',
    },
  });

  useEffect(() => {
    setActive(true);
  }, []);

  const nameRE: RegExp = /^\p{L}{2,}.*/gu;
  const emailRE: RegExp = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;

  const handleFormSubmit = handleSubmit((data) => console.log(data));

  return (
    <form
      action=""
      className={cn(
        s.form,
        active && s.active,
        device === 'tablet' && s.tablet,
        device === 'mobile' && s.mobile
      )}
      onSubmit={handleFormSubmit}
      noValidate
    >
      <div className={s.name_box}>
        <label htmlFor="name" className={s.label}>
          {t('NAME')}
        </label>
        <input
          {...register('name', {
            required: t('ERRMSG_NAME_REQ'),
            minLength: {
              value: 2,
              message: t('ERRMSG_NAME_LENGTH'),
            },
            pattern: {
              value: nameRE,
              message: t('ERRMSG_NAME_CHARS'),
            },
          })}
          id="name"
          type="text"
          onChange={() => {}}
          className={cn(s.input, s.name)}
        />
        <div className={s.error}>{errors.name?.message}</div>
      </div>

      <div className={s.email_box}>
        <label htmlFor="email" className={s.label}>
          {t('EMAIL')}
        </label>
        <input
          {...register('email', {
            pattern: {
              value: emailRE,
              message: t('ERRMSG_EMAIL'),
            },
          })}
          id="email"
          type="email"
          onChange={() => {}}
          className={cn(s.input, s.email)}
        />
        <div className={s.error}>{errors.email?.message}</div>
      </div>

      <div className={s.message_box}>
        <label htmlFor="message" className={s.label}>
          {t('MESSAGE')}
        </label>
        <textarea
          {...register('message', {
            required: t('ERRMSG_MESSAGE_REQ'),
            minLength: {
              value: 10,
              message: t('ERRMSG_MESSAGE_LENGTH'),
            },
          })}
          id="message"
          onChange={() => {}}
          className={cn(s.input, s.message)}
        />
        <div className={s.error}>{errors.message?.message}</div>
      </div>

      <div className={s.privacy_box}>
        <label className={s.checkbox_container}>
          <input
            {...register('privacy', {
              required: {
                value: true,
                message: t('ERRMSG_PRIVACY_REQ'),
              },
            })}
            type="checkbox"
            id="privacy"
            className={s.checkbox_input}
          />
          <div className={s.checkbox} />
        </label>
        <span>
          {t('I_ACCEPT_1')}
          <Link to="/privacy" className={s.privacy_link}>
            {t('PRIVACY_POLICY_TO_ACCEPT')}
          </Link>
          {t('I_ACCEPT_2')}
        </span>
        <div />
        <div className={s.error}>{errors.privacy?.message}</div>
      </div>

      <input
        {...register('lang')}
        id="lang"
        type="hidden"
        value={i18n.language}
      />

      <div className={s.btn_box}>
        <Btn onClick={() => {}} type="submit" disabled={false}>
          {t('SEND')}
        </Btn>
      </div>
    </form>
  );
}
