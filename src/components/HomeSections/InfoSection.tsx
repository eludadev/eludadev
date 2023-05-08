import { i18n } from '~/i18n';

export default function InfoSection(): JSX.Element {
  return (
    <section className="py-24 px-12">
      <h2 className="text-primary-600 font-extrabold text-4xl">
        {i18n.t('design.title')}
      </h2>
      <p className="text-sm font-light mt-4">{i18n.t('design.description')}</p>

      <h2 className="text-primary-600 font-extrabold text-4xl mt-16">
        {i18n.t('engineering.title')}
      </h2>
      <p className="text-sm font-light mt-4">
        {i18n.t('engineering.description')}
      </p>
    </section>
  );
}
