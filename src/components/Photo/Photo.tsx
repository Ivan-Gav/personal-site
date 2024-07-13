import { useState } from 'react';
import cn from 'classnames';
import s from './Photo.module.css';
import photo from 'src/assets/pics/avatar_v2.png';

export default function Photo() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={s.photo_frame}>
      <img
        className={cn(s.photo, loaded && s.loaded)}
        src={photo}
        alt="hi!"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
