import photo from 'src/assets/pics/avatar.png';
import s from './Photo.module.css';

export default function Photo() {
  return (
    <div className={s.photo_frame}>
      <img className={s.photo} src={photo} alt="hi!" />
    </div>
  );
}
