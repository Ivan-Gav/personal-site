import { useState } from 'react';
import cn from 'classnames';
import s from './Photo.module.css';

const AVIF = '/pics/avatar_v2.avif';
const WEBP = '/pics/avatar_v2.webp';
const PNG = '/pics/avatar_v2.png';

export default function Photo() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={s.photo_frame}>
      <picture className={s.picture}>
        <source srcSet={AVIF} type="image/avif" />
        <source srcSet={WEBP} type="image/webp" />
        <img
          className={cn(s.photo, loaded && s.loaded)}
          src={PNG}
          alt="hi!"
          fetchPriority="high"
          onLoad={() => setLoaded(true)}
        />
      </picture>
    </div>
  );
}
