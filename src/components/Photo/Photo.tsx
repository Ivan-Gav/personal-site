import { useState } from 'react';
import cn from 'classnames';
import s from './Photo.module.css';
import photoAvif from 'src/assets/pics/avatar_v2.avif';
import photoWebp from 'src/assets/pics/avatar_v2.webp';
import photo from 'src/assets/pics/avatar_v2.png';

export default function Photo() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={s.photo_frame}>
      <picture className={s.picture}>
        <source srcSet={photoAvif} type="image/avif" />
        <source srcSet={photoWebp} type="image/webp" />
        <img
          className={cn(s.photo, loaded && s.loaded)}
          src={photo}
          alt="hi!"
          fetchPriority="high"
          onLoad={() => setLoaded(true)}
        />
      </picture>
    </div>
  );
}
