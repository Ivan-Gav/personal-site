import icons from 'src/assets/icons';

export default function Icon({ skill }: { skill: string }) {
  const iconName = skill.replace(/([\s.])+/g, '').toUpperCase();

  if (!(iconName in icons)) return null;
  const SVG = icons[iconName as keyof typeof icons];
  return <SVG />;
}
