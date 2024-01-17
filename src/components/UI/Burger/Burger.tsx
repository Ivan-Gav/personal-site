import cn from 'classnames';
import s from './Burger.module.css';

type BurgerProps = {
  active: boolean;
  onClick: () => void;
};

export default function Burger(props: BurgerProps) {
  const { active, onClick } = props;

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClick();
      console.log('Esc!');
    }
  };

  return (
    <button
      className={cn(s.burger, active && s.active)}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <span className={s.burger_span}></span>
    </button>
  );
}
