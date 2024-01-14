import Select from '../UI/Select/Select';

export default function LangSelect() {
  const languages = ['RU', 'EN', 'DE'];

  const handleLang = (e: React.FormEvent<HTMLSelectElement>) =>
    console.log(e.currentTarget.value);

  return (
    <Select
      title="Lang"
      options={languages}
      onChange={handleLang}
      initial="EN"
    />
  );
}
