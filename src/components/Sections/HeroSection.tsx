import HeadshotImage from '~/assets/headshot.png';
import { i18n } from '~/i18n';

import Image from 'next/image';

export default function HeroSection(): JSX.Element {
  return (
    <main className="lg:h-screen">
      <div className="lg:flex bg-primary-700">
        <div className="px-8 lg:w-3/4 lg:pb-16 lg:px-24 lg:pt-12">
          <h1 className="text-4xl lg:text-6xl lg:max-w-lg pt-16 font-extrabold px-8 text-secondary-300">
            {i18n.t('role')}
          </h1>
          <p className="mt-5 text-white lg:max-w-lg lg:text-lg lg:mt-8 mb-24 px-8">
            {i18n.t('tagline')}
          </p>
          <div className="mb-2 flex px-8 gap-12 lg:max-w-lg">
            <p className="text-xs lg:text-sm text-secondary-300">
              {i18n.t('descriptions.0')}
            </p>
            <p className="text-xs lg:text-sm text-secondary-300">
              {i18n.t('descriptions.1')}
            </p>
          </div>
        </div>
        <div className="bg-secondary-200 mt-16 lg:w-1/4 lg:mt-0">
          <div className="bg-[url(/assets/photo-frame.svg)] lg:-translate-x-1/2 py-12 lg:py-0 lg:h-full lg:grid lg:place-items-center lg:w-[800px] pb-24 bg-no-repeat bg-[length:80%] bg-center">
            <Image
              src={HeadshotImage}
              className="mx-auto h-52 w-52 lg:w-72 lg:h-72 lg:-translate-x-6 lg:-translate-y-6 object-cover"
              alt={i18n.t('headshot-alt')}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
