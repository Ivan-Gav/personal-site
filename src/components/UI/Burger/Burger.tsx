import cn from 'classnames';
import s from './Burger.module.css';

type BurgerProps = {
  active: boolean;
  onClick: () => void;
};

export default function Burger(props: BurgerProps) {
  const { active, onClick } = props;

  return (
    <button className={cn(s.burger, active && s.active)} onClick={onClick}>
      <span className={s.burger_span}></span>
    </button>
  );
}
