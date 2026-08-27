# gavrilin.online — приведение в соответствие с обновлённым CV

**Репозиторий:** `Ivan-Gav/personal-site` · **ветка:** `develop`
**Файлы:** `public/locales/{en,de,ru}/translation.json`, `src/pages/CV/CV.tsx`

Источник истины — обновлённые CV (EN/DE/RU) в трёх языковых версиях. Сайт должен
совпадать с ними по фактам, датам и названиям. Формат может отличаться.

---

## 1. Разделить карточку OSKO на две

Сейчас в `CV.tsx` одна карточка:

```
fromDate="2000" toDate="2012"
company={t('OSKO')}            // "OSKO, Stiebel Eltron, Hydroplastics"
position={t('OSKO_POSITION')}  // "Commercial director"
```

Это склейка двух разных мест работы. Нужны две карточки, в обратном
хронологическом порядке (как везде на странице): сначала Hydroplastics, потом OSKO.

### Карточка 1 — Hydroplastics

```
fromDate="01.2009" toDate="01.2013"
company={t('HYDRO')}
location={t('MOSCOW')}
position={t('HYDRO_POSITION')}
description_key="HYDRO_DESCRIPTION"
skills={[SKILLS.HTML, SKILLS.CSS]}   // сайт на Joomla, вёрстка своя
```

Новые ключи локализации:

| ключ | EN | DE | RU |
|---|---|---|---|
| `HYDRO` | Hydroplastics | Hydroplastika | Гидропластика |
| `HYDRO_POSITION` | Co-founder, self-employed | Mitgründer, selbstständig | Соучредитель |

`HYDRO_DESCRIPTION` — по тексту из CV:

- **EN:** Co-ran a fountain construction and rental business. Built and maintained
  the company website (Joomla, HTML/CSS) with a project portfolio and rental
  catalogue, which later grew into the fontan-online.ru online store.
- **DE:** Springbrunnenbau und -vermietung. Aufbau und Pflege der Firmenwebsite
  (Joomla, HTML/CSS) mit Projektportfolio und Mietkatalog – daraus entstand später
  der Online-Shop fontan-online.ru.
- **RU:** Строительство и аренда фонтанов. Создание и поддержка сайта компании
  (Joomla, HTML/CSS) с портфолио объектов и каталогом фонтанов в аренду — из него
  позже вырос интернет-магазин fontan-online.ru.

### Карточка 2 — OSKO

```
fromDate="2000" toDate="2008"
company={t('OSKO')}
location={t('MOSCOW')}
position={t('OSKO_POSITION')}
description_key="OSKO_DESCRIPTION"
skills={[t('SKILLS_SALES'), t('SKILLS_MANAGEMENT')]}
```

Правки ключей:

- `OSKO`: убрать Hydroplastics из названия → `OSKO, Stiebel Eltron` /
  `ОСКО, Штибель Эльтрон`
- `OSKO_POSITION`: сейчас EN «Commercial director», RU «Коммерческий директор» —
  **противоречит Arbeitszeugnis**. Должно быть:
  - EN: Sales Engineer / Head of Sales
  - DE: Verkaufsingenieur / Verkaufsleiter (уже почти верно — сейчас `Verkaufsleiter`)
  - RU: Инженер по продажам / руководитель отдела продаж
- `OSKO_DESCRIPTION`: убрать «climbed the career ladder from sales manager to
  commercial director» / «vom Verkäufer zum Verkaufsleiter» / «от менеджера по
  продажам до коммерческого директора». Формулировка из CV:
  - **EN:** Represented German brands such as Stiebel Eltron, OASE, Grundfos, and
    Buderus on the Russian market: B2B sales, client relations, and interpreting for
    German partners. Organized business trips and trade fair visits to Germany.
  - **DE:** Vertretung deutscher Marken wie Stiebel Eltron, OASE, Grundfos und
    Buderus auf dem russischen Markt: B2B-Vertrieb, Kundenbeziehungen und
    Dolmetschen für deutsche Partner. Organisation von Geschäftsreisen und
    Messebesuchen in Deutschland.
  - **RU:** Продажа оборудования немецких брендов Stiebel Eltron, OASE, Grundfos и
    Buderus на российском рынке: B2B-продажи, работа с клиентами и немецкими
    партнёрами, перевод. Организация командировок и посещений выставок в Германии.

---

## 2. fontan-online — дата начала

`fromDate="2012"` → `fromDate="01.2013"`. Конец без изменений (`05.2024`).

Причина: до января 2013 проект существовал внутри Hydroplastics; выход из ООО
оформлен январём 2013.

---

## 3. Блок фриланса → проекты

Ключ `FREELANCE` (название карточки), сейчас
«Freelance / Project-based Development». В CV этот блок переименован, потому что
описывал учебные проекты, а читался как коммерческий фриланс.

На сайте курсы Rolling Scopes School уже стоят тремя отдельными карточками в
Education, поэтому школу в названии повторять не нужно:

- EN: `Frontend Projects`
- DE: `Frontend-Projekte`
- RU: `Frontend-проекты`

Даты (`03.2023 – 05.2024`) не трогать — они верные.

В `FREELANCE_DESCRIPTION` убрать буллет **Global Architecture / Architektur-Muster /
Архитектурные паттерны** (Custom Hooks, Render Props, Compound Components) — он
удалён из CV как слабый. Остальные три проекта и ссылку на Портфолио оставить.

Ключи можно оставить с именем `FREELANCE*`, переименование ключей не обязательно.

---

## 4. Локация — Тбилиси

Сейчас `MOSCOW` проставлен на всех карточках опыта. Исторические места работы
действительно в Москве, а текущие — нет.

Завести ключ `TBILISI`:

- EN: Tbilisi, Georgia · DE: Tiflis, Georgien · RU: Тбилиси, Грузия

Проставить `location={t('TBILISI')}` на карточках **AcePlace** и **Frontend Projects**.
`MOSCOW` оставить на Hydroplastics, fontan-online, OSKO и MPEI.

---

## 5. AcePlace — выровнять цифру

В `ACEPLACE_DESCRIPTION` (все три языка): `refactored 100+ components` → **150+**.
В CV указано 150+, расхождение надо убрать.

---

## 6. PROFILE_DESCRIPTION — переписать

Текущий текст написан сразу после выпуска с курсов, при поиске первой работы, и
это слышно: «I am actively studying and constantly expanding my stack», «Having
come to the frontend from the field of online commerce», «Живу в Москве».

**Задача:** убрать джуновскую интонацию, сохранив универсальность — текст **не
должен** быть заточен под Германию (для немецкого читателя уже работают ZAB, DAAD,
Goethe C1 в блоке образования).

Что стоит отразить:

- React / Next.js / TypeScript как основной стек, архитектура (FSD), рефакторинг
  крупных приложений — то, чем он занимается сейчас
- инженерное образование и 12 лет собственного бизнеса как источник понимания
  бизнес-задач, без формулировки «пришёл во фронтенд из торговли»
- английский и немецкий C1
- готовность к переезду — нейтрально, без привязки к одной стране

Чего избегать: «активно учусь», «постоянно расширяю стек», «passionate»,
«dynamic team player» и прочих клише. Тон — простой и конкретный, без
рекламных оборотов. Три версии (EN/DE/RU) должны совпадать по смыслу, а не быть
дословным переводом.

---

## Проверка перед коммитом

- [ ] Три `translation.json` — валидный JSON, одинаковый набор ключей во всех трёх
- [ ] Новые ключи (`HYDRO`, `HYDRO_POSITION`, `HYDRO_DESCRIPTION`, `TBILISI`)
      добавлены во все три локали
- [ ] `npm run lint` и `npm run build` проходят
- [ ] Карточки опыта идут строго от поздних к ранним
- [ ] Даты на сайте совпадают с CV: AcePlace 05.2024–наст., Frontend Projects
      03.2023–05.2024, fontan-online 01.2013–05.2024, Hydroplastics
      01.2009–01.2013, OSKO 2000–2008
- [ ] Слово «Freelance» / «Фриланс» / «Freiberuflich» на странице CV не осталось
- [ ] Ни на одной карточке текущего опыта не осталось «Moscow»
