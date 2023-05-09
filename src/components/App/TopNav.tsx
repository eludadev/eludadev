'use client';

import clsx from 'clsx';

import { NavigationContext } from '~/context/Navigation';
import { i18n } from '~/i18n';

import EludaLogo from '../Icons/EludaLogo';
import MenuIcon from '../Icons/MenuIcon/MenuIcon';

import { useContext } from 'react';

import Link from 'next/link';

export default function TopNav(): JSX.Element {
  const { isMenuToggled, toggleMenu } = useContext(NavigationContext);

  return (
    <header
      className={clsx(
        'flex justify-between items-center px-8 z-20 relative py-4 transition-colors ease-out-cubic',
        isMenuToggled ? 'bg-white' : 'bg-primary-700',
      )}
    >
      <Link
        href="/"
        aria-label={i18n.t('home-button')}
        className={isMenuToggled ? 'text-primary-500' : 'text-secondary-300'}
      >
        <EludaLogo />
      </Link>
      <button
        className={clsx(
          'p-2',
          isMenuToggled ? 'text-primary-500' : 'text-white',
        )}
        onClick={() => toggleMenu()}
      >
        <MenuIcon isToggled={isMenuToggled} />
      </button>
    </header>
  );
}
