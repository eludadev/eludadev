import HeadshotImage from '~/assets/headshot.png';
import { i18n } from '~/i18n';

import Image from 'next/image';

export default function HeroSection(): JSX.Element {
  return (
    <main className="xl:flex">
      <div className="px-8 xl:w-3/4 xl:pb-16 xl:px-24 xl:pt-12">
        <h1 className="text-4xl xl:text-6xl xl:max-w-lg pt-16 font-extrabold px-8 text-secondary-300">
          {i18n.t('role')}
        </h1>
        <p className="mt-5 text-white xl:max-w-lg xl:text-lg xl:mt-8 mb-24 px-8">
          {i18n.t('tagline')}
        </p>
        <div className="mb-2 flex px-8 gap-12 xl:max-w-lg">
          <p className="text-xs xl:text-sm text-secondary-300">
            {i18n.t('descriptions.0')}
          </p>
          <p className="text-xs xl:text-sm text-secondary-300">
            {i18n.t('descriptions.1')}
          </p>
        </div>
      </div>
      <div className="bg-secondary-200 mt-16 xl:w-1/4 xl:mt-0">
        <div className="bg-[url(/assets/photo-frame.svg)] xl:-translate-x-1/2 py-12 xl:py-0 xl:h-full xl:grid xl:place-items-center xl:w-[800px] pb-24 bg-no-repeat bg-[length:80%] bg-center">
          <Image
            src={HeadshotImage}
            className="mx-auto h-52 w-52 xl:w-72 xl:h-72 xl:-translate-x-6 xl:-translate-y-6 object-cover"
            alt={i18n.t('headshot-alt')}
          />
        </div>
      </div>
    </main>
  );
}
