import { useTranslation } from 'react-i18next';
import Switch from '../UI/Switch/Switch';
import Moon from 'src/assets/icons/moon.svg?react';
import Sun from 'src/assets/icons/sun.svg?react';
import { useTheme } from 'src/context/ThemeContext';

export default function ThemeSwitch() {
  const { dark, setDark } = useTheme();
  const { t } = useTranslation();

  const onChange = (checked: boolean) => setDark(checked);

  return (
    <Switch
      title={t('SWITCH_THEME')}
      onChange={onChange}
      contentOff={<Sun />}
      contentOn={<Moon />}
      initial={dark}
      id="themeswitch"
    />
  );
}
