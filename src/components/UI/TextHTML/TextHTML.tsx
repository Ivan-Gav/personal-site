import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { Dictionary } from 'src/@types/models';

type TextHTMLProps = {
  i18nKey: Dictionary;
  className?: string;
};

export const TextHTML = (props: TextHTMLProps) => {
  const { i18nKey, className } = props;
  const { t } = useTranslation();

  return <div className={className}>{parse(t(i18nKey))}</div>;
};
