import s from './Skill.module.css';
import icons from 'src/assets/icons';

type SkillProps = {
  skill: string;
  icon?: keyof typeof icons;
};

export default function Skill(props: SkillProps) {
  const { skill, icon } = props;

  function Icon() {
    if (!icon) return null;
    const SVG = icons[icon];
    return <SVG />;
  }

  return (
    <li className={s.skill}>
      {!!icon && <Icon />}
      {skill}
    </li>
  );
}
