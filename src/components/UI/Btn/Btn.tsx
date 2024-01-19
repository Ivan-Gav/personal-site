import s from './Btn.module.css';
import cn from 'classnames';

type BtnProps = {
  children: React.ReactNode | string;
  onClick: () => void;
  addClass?: string;
};

export default function Btn(props: BtnProps) {
  const { children, onClick, addClass } = props;

  return (
    <button onClick={onClick} className={cn(s.btn, addClass && s[addClass])}>
      {children}
    </button>
  );
}
