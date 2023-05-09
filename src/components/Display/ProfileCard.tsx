import { i18n } from '~/i18n';

export default function ProfileCard(): JSX.Element {
  return (
    <article className="hidden lg:block">
      <a
        href={i18n.t('resume.profile.website.link')}
        aria-label={i18n.t('resume.profile.website.title')}
        className="font-bold text-primary-600 text-sm relative before:absolute before:w-[105%] before:translate-x-[-2.5%] before:h-1.5 before:bg-secondary-300 before:translate-y-3.5 w-fit"
      >
        <span className="relative z-10">
          {i18n.t('resume.profile.website.display')}
        </span>
      </a>
      <small className="font-normal text-black/60 text-sm block my-1">
        {i18n.t('resume.profile.location')}
      </small>
      <a
        href={i18n.t('resume.profile.email.link')}
        aria-label={i18n.t('resume.profile.email.title')}
        className="font-bold text-primary-600 text-sm relative before:absolute before:w-[105%] before:translate-x-[-2.5%] before:h-1.5 before:bg-secondary-300 before:translate-y-3.5 w-fit"
      >
        <span className="relative z-10">
          {i18n.t('resume.profile.email.display')}
        </span>
      </a>
    </article>
  );
}
