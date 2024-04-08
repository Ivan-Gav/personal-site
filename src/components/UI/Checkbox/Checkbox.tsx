import cn from 'classnames';
import s from './Checkbox.module.css';

type CheckboxProps = {
  onChange: () => void;
  title?: string;
  id?: string;
  name?: string;
  className?: string;
  defaultChecked?: boolean;
};

export default function Checkbox(props: CheckboxProps) {
  const { id, name, title, onChange, className, defaultChecked } = props;

  return (
    <label className={cn(s.checkbox_container, className)}>
      <input
        type="checkbox"
        className={cn(s.checkbox_input, className)}
        onChange={onChange}
        defaultChecked={defaultChecked || false}
        id={id}
        name={name}
        title={title}
      />
      <div className={cn(s.checkbox, className)} />
    </label>
  );
}
