import MenuLink from '~/components/Interactive/MenuLink';
import { i18n } from '~/i18n';

export default function MainMenu(): JSX.Element {
  return (
    <menu className="w-full min-h-full bg-white z-10 absolute top-0">
      <article className="mt-28 pl-16">
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
      <article className="mt-14 pl-16">
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
