import { useState } from 'react';
import s from './Select.module.css';

type SelectProps = {
  title: string;
  options: { optionName: string; optionValue: string }[];
  onChange: (event: React.FormEvent<HTMLSelectElement>) => void;
  initial?: string;
};

export default function Select(props: SelectProps) {
  const { title, options, onChange, initial } = props;
  const [value, setValue] = useState(initial || options[0].optionName);

  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value);
    onChange(e);
  };

  return (
    <div className={s.select_container}>
      <select
        id={`select_${title}`}
        name={`select_${title}`}
        className={s.select}
        title={title}
        value={value}
        onChange={handleChange}
      >
        {options.map((optn) => (
          <option key={optn.optionName} value={optn.optionValue}>
            {optn.optionName}
          </option>
        ))}
      </select>
    </div>
  );
}
