import HeadshotImage from '~/assets/headshot.png';
import { i18n } from '~/i18n';

import Image from 'next/image';

export default function HeroSection(): JSX.Element {
  return (
    <main>
      <div className="px-8">
        <h1 className="text-4xl pt-16 font-extrabold px-8 text-secondary-300">
          {i18n.t('role')}
        </h1>
        <p className="mt-5 text-white mb-24 px-8">{i18n.t('tagline')}</p>
        <div className="mb-2 flex px-8 gap-12">
          <p className="text-xs text-secondary-300">
            {i18n.t('descriptions.0')}
          </p>
          <p className="text-xs text-secondary-300">
            {i18n.t('descriptions.1')}
          </p>
        </div>
      </div>
      <div className="bg-secondary-200 mt-16">
        <div className="bg-[url(/assets/photo-frame.svg)] py-12 pb-24 bg-no-repeat bg-[length:80%] bg-center">
          <Image
            src={HeadshotImage}
            className="mx-auto h-52 w-52 object-cover"
            alt={i18n.t('headshot-alt')}
          />
        </div>
      </div>
    </main>
  );
}
