import { useState } from 'react';
import s from './Switch.module.css';

type SwitchProps = {
  title: string;
  contentOn: React.ReactNode;
  contentOff: React.ReactNode;
  onChange: (checked: boolean) => void;
  initial?: boolean;
};

export default function Switch(props: SwitchProps) {
  const { title, contentOn, contentOff, onChange, initial } = props;
  const [checked, setChecked] = useState(initial || false);

  const handleChange = () => {
    setChecked((prev) => !prev);
    onChange(!checked);
  };

  return (
    <label className={s.switch} title={title}>
      <input
        className={s.switch_input}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <span className={s.switch_box}>
        <span className={checked ? s.switch_on : s.switch_off}>
          {checked ? contentOn : contentOff}
        </span>
      </span>
    </label>
  );
}
