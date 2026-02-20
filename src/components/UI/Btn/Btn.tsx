import s from './Btn.module.css';
import cn from 'classnames';

type BtnProps = {
  children: React.ReactNode | string;
  onClick?: () => void;
  addClass?: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
};

export default function Btn(props: BtnProps) {
  const { children, onClick, addClass, type, disabled = false } = props;

  return (
    <button
      onClick={onClick}
      className={cn(s.btn, addClass && s[addClass])}
      type={type || 'button'}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
