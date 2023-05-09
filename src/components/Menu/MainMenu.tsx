'use client';

import clsx from 'clsx';

import MenuLink from '~/components/Interactive/MenuLink';
import { NavigationContext } from '~/context/Navigation';
import useLockBody from '~/hooks/useLockBody';
import { i18n } from '~/i18n';

import { useContext } from 'react';

import Link from 'next/link';

export default function MainMenu(): JSX.Element {
  const { isMenuToggled } = useContext(NavigationContext);
  useLockBody(isMenuToggled);

  return (
    <menu
      className={clsx(
        'w-full min-h-full bg-white lg:min-h-0 lg:py-8 lg:top-14 lg:w-fit lg:pr-24 lg:m-8 lg:shadow-sm lg:right-0 z-10 absolute top-0 transition-opacity ease-out-cubic',
        isMenuToggled
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none',
      )}
    >
      <article className="mt-28 pl-16 lg:mt-0">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={i18n.t('links.work.value')}
          aria-label={i18n.t('links.work.title')}
        >
          <MenuLink>{i18n.t('links.work.display')}</MenuLink>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={i18n.t('links.shelf.value')}
          aria-label={i18n.t('links.shelf.title')}
        >
          <MenuLink>{i18n.t('links.shelf.display')}</MenuLink>
        </a>

        <Link href="/resume">
          <span aria-label={i18n.t('links.resume.title')}>
            <MenuLink>{i18n.t('links.resume.display')}</MenuLink>
          </span>
        </Link>
      </article>
      <article className="mt-14 pl-16 xl:mt-">
        <h2 className="text-xl font-light uppercase text-primary-300 mb-2">
          {i18n.t('links.title')}
        </h2>
        <a
          rel="noreferrer noopener"
          target="_blank"
          href={i18n.t('links.email.value')}
          aria-label={i18n.t('links.email.title')}
        >
          <MenuLink>{i18n.t('links.email.display')}</MenuLink>
        </a>
        <a
          rel="noreferrer noopener"
          target="_blank"
          href={i18n.t('links.telegram.value')}
          aria-label={i18n.t('links.telegram.title')}
        >
          <MenuLink>{i18n.t('links.telegram.display')}</MenuLink>
        </a>
      </article>
      <article className="pl-16 flex gap-8 mt-8">
        <a
          rel="noreferrer noopener"
          target="_blank"
          href={i18n.t('links.github.value')}
          aria-label={i18n.t('links.github.title')}
        >
          <MenuLink>{i18n.t('links.github.display')}</MenuLink>
        </a>
        <a
          rel="noreferrer noopener"
          target="_blank"
          href={i18n.t('links.linkedin.value')}
          aria-label={i18n.t('links.linkedin.title')}
        >
          <MenuLink>{i18n.t('links.linkedin.display')}</MenuLink>
        </a>
        <a
          rel="noreferrer noopener"
          target="_blank"
          href={i18n.t('links.reddit.value')}
          aria-label={i18n.t('links.reddit.title')}
        >
          <MenuLink>{i18n.t('links.reddit.display')}</MenuLink>
        </a>
      </article>
    </menu>
  );
}
