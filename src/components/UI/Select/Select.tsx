import s from './Select.module.css';

type SelectProps = {
  title: string;
  options: string[];
  onChange: (event: React.FormEvent<HTMLSelectElement>) => void;
  initial?: string;
};

export default function Select(props: SelectProps) {
  const { title, options, onChange, initial } = props;

  return (
    <div className={s.select_container}>
      <select
        id={`select_${title}`}
        name={`select_${title}`}
        className={s.select}
        title={title}
        onChange={onChange}
      >
        {options.map((optn) => (
          <option key={optn} value={optn} defaultChecked={optn === initial}>
            {optn}
          </option>
        ))}
      </select>
    </div>
  );
}
