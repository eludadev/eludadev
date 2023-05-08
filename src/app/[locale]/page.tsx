import { useTranslations } from 'next-intl';

export default function Index() {
  const t = useTranslations('Index');
  return <h1 className="font-sans font-bold text-6xl">{t('title')}</h1>;
}
