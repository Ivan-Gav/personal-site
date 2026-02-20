import Icon from '../Icon/Icon';
import s from './Skill.module.css';

type SkillProps = {
  skill: string;
};

export default function Skill(props: SkillProps) {
  const { skill } = props;

  return (
    <li className={s.skill}>
      <Icon skill={skill} />
      {skill}
    </li>
  );
}
