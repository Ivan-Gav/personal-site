import cn from 'classnames';
import s from './Drawer.module.css';

type DrawerProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClick: (e: React.MouseEvent) => void;
};

export default function Drawer(props: DrawerProps) {
  const { children, isOpen, onClick } = props;

  const onDrawerClick = (e: React.MouseEvent) => {
    // e.stopPropagation();
    // if (e.target !== e.currentTarget) {
    //   onClick();
    // }
    console.log(e.currentTarget);
  };

  return (
    <div className={cn(s.overlay, isOpen && s.active)} onClick={onClick}>
      <div className={cn(s.drawer, isOpen && s.active)} onClick={onDrawerClick}>
        {children}
      </div>
    </div>
  );
}
