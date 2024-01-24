import s from './Skill.module.css';
import icons from 'src/assets/icons';

type SkillProps = {
  skill: string;
  icon?: keyof typeof icons;
};

export default function Skill(props: SkillProps) {
  const { skill } = props;

  function Icon() {
    const iconName = skill.replace(/([\s.])+/g, '').toUpperCase();

    if (!(iconName in icons)) return null;
    const SVG = icons[iconName as keyof typeof icons];
    return <SVG />;
  }

  return (
    <li className={s.skill}>
      <Icon />
      {skill}
    </li>
  );
}
