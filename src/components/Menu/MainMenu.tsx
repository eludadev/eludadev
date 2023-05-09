'use client';

import clsx from 'clsx';

import MenuLink from '~/components/Interactive/MenuLink';
import { NavigationContext } from '~/context/Navigation';
import useLockBody from '~/hooks/useLockBody';
import { i18n } from '~/i18n';

import { useContext } from 'react';

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
        <MenuLink
          href={i18n.t('links.work.value')}
          title={i18n.t('links.work.title')}
        >
          {i18n.t('links.work.display')}
        </MenuLink>
        <MenuLink
          href={i18n.t('links.shelf.value')}
          title={i18n.t('links.shelf.title')}
        >
          {i18n.t('links.shelf.display')}
        </MenuLink>
        <MenuLink
          href={i18n.t('links.resume.value')}
          title={i18n.t('links.resume.title')}
        >
          {i18n.t('links.resume.display')}
        </MenuLink>
      </article>
      <article className="mt-14 pl-16 xl:mt-">
        <h2 className="text-xl font-light uppercase text-primary-300 mb-2">
          {i18n.t('links.title')}
        </h2>
        <MenuLink
          href={i18n.t('links.email.value')}
          title={i18n.t('links.email.title')}
        >
          {i18n.t('links.email.display')}
        </MenuLink>
        <MenuLink
          href={i18n.t('links.telegram.value')}
          title={i18n.t('links.telegram.title')}
        >
          {i18n.t('links.telegram.display')}
        </MenuLink>
      </article>
      <article className="pl-16 flex gap-8 mt-8">
        <MenuLink
          href={i18n.t('links.github.value')}
          title={i18n.t('links.github.title')}
        >
          {i18n.t('links.github.display')}
        </MenuLink>
        <MenuLink
          href={i18n.t('links.linkedin.value')}
          title={i18n.t('links.linkedin.title')}
        >
          {i18n.t('links.linkedin.display')}
        </MenuLink>
      </article>
    </menu>
  );
}
