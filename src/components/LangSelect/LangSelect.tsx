import { useTranslation } from 'react-i18next';

import Select from '../UI/Select/Select';

const languages = [
  {
    optionName: 'РУ',
    optionValue: 'ru',
  },
  {
    optionName: 'EN',
    optionValue: 'en',
  },
  {
    optionName: 'DE',
    optionValue: 'de',
  },
];

export default function LangSelect() {
  const { i18n } = useTranslation();

  const handleLang = (e: React.FormEvent<HTMLSelectElement>) => {
    const selectedLang = e.currentTarget.value;
    i18n.changeLanguage(selectedLang);
  };

  return (
    <Select
      title="Lang"
      options={languages}
      onChange={handleLang}
      initial={i18n.language}
    />
  );
}
