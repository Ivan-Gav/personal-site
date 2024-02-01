import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@react-hooks-hub/use-media-query';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import cn from 'classnames';
import s from './ContactForm.module.css';
import Btn from '../UI/Btn/Btn';
import Loading from '../UI/Loading/Loading';

export default function ContactForm() {
  const [active, setActive] = useState(false);
  const { device } = useMediaQuery();
  const { t, i18n } = useTranslation();
  const { register, setValue, reset, handleSubmit, formState } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
      privacy: false,
      lang: '',
    },
  });

  const { errors, isSubmitting, dirtyFields, isSubmitSuccessful } = formState;

  const customIsDirty = Object.keys(dirtyFields).some((key) => key !== 'lang');

  useEffect(() => {
    setActive(true);
  }, []);

  useEffect(() => {
    setValue('lang', i18n.language);
  }, [i18n.language, setValue]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const nameRE: RegExp = /^\p{L}{2,}.*/gu;
  const emailRE: RegExp = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;

  const handleFormSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });
    const response = await fetch('php/mailer.php', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Message delivered!');
    } else {
      console.log('Message NOT delivered!');
    }
  });

  return (
    <>
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
            className={cn(s.input, s.name)}
            autoComplete="name"
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
            className={cn(s.input, s.email)}
            autoComplete="email"
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
            className={cn(s.input, s.message)}
            autoComplete="off"
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

        <input {...register('lang')} id="lang" type="hidden" />

        <div className={s.btn_box} id="submit">
          <Btn type="submit" disabled={!customIsDirty || isSubmitting}>
            {t('SEND')}
          </Btn>
        </div>

        {isSubmitting && (
          <div className={s.cover}>
            <Loading />
          </div>
        )}
      </form>
    </>
  );
}
