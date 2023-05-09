import { i18n } from '~/i18n';

import EludaLogo from '../Icons/EludaLogo';
import MenuIcon from '../Icons/MenuIcon';

import Link from 'next/link';

export default function TopNav(): JSX.Element {
  return (
    <header className="flex justify-between items-center px-8 z-20 relative bg-primary-700 py-4">
      <Link href="/" aria-label={i18n.t('home-button')}>
        <EludaLogo />
      </Link>
      <button className="p-2">
        <MenuIcon />
      </button>
    </header>
  );
}
