import { i18n } from '~/i18n';

export default function InfoSection(): JSX.Element {
  return (
    <section className="py-24 px-12 lg:h-screen lg:flex-col lg:px-24 lg:bg-[url(/assets/photo-frame.svg)]">
      <div>
        <h2 className="text-primary-600 font-extrabold text-4xl lg:text-6xl">
          {i18n.t('design.title')}
        </h2>
        <p className="text-sm font-light mt-4 lg:text-base lg:max-w-lg">
          {i18n.t('design.description')}
        </p>
      </div>
      <div className="lg:ml-auto lg:w-fit">
        <h2 className="text-primary-600 font-extrabold text-4xl mt-16 lg:text-6xl">
          {i18n.t('engineering.title')}
        </h2>
        <p className="text-sm font-light mt-4 lg:text-base lg:max-w-lg">
          {i18n.t('engineering.description')}
        </p>
      </div>
    </section>
  );
}
