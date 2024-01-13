import Switch from '../UI/Switch/Switch';
import Moon from 'src/assets/icons/moon.svg?react';
import Sun from 'src/assets/icons/sun.svg?react';
import { useTheme } from 'src/context/ThemeContext';

export default function ThemeSwitch() {
  const { dark, setDark } = useTheme();

  const onChange = (checked: boolean) => setDark(checked);

  return (
    <Switch
      title="Switch theme"
      onChange={onChange}
      contentOff={<Sun />}
      contentOn={<Moon />}
      initial={dark}
    />
  );
}
