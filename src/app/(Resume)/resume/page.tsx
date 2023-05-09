import ProfileCard from '~/components/Display/ProfileCard';
import TechStack from '~/components/Display/TechStack';
import DownloadIcon from '~/components/Icons/DownloadIcon';
import EludaLogo from '~/components/Icons/EludaLogo';
import LinkedInLogo from '~/components/Icons/LinkedInLogo';
import MailIcon from '~/components/Icons/MailIcon';
import ResumeDetails from '~/components/Resume/ResumeDetails';
import { i18n } from '~/i18n';

export default function Resume(): JSX.Element {
  return (
    <div className="bg-primary-50 flex flex-col lg:my-12 lg:max-w-5xl lg:mx-24 lg:pt-24 pb-12 lg:grid lg:grid-cols-[1fr,3fr]">
      <div className="flex items-center gap-3 ml-auto w-fit mr-12 lg:mr-24 my-16 lg:my-0 lg:col-start-2 lg:row-start-1 self-start z-10">
        <a
          className="text-primary-600"
          href={i18n.t('links.linkedin.value')}
          aria-label={i18n.t('links.linkedin.title')}
        >
          <LinkedInLogo />
        </a>
        <a
          href={i18n.t('resume.profile.email.link')}
          className="text-xs text-black/60 font-normal flex items-center gap-1 lg:hidden"
        >
          <MailIcon />
        </a>
        <a
          href={i18n.t('resume.download.link')}
          className="text-xs text-black/60 font-normal flex items-center gap-1"
        >
          <DownloadIcon />
          <span>{i18n.t('resume.download.title')}</span>
        </a>
      </div>
      <main className="lg:col-start-2 order-1 lg:row-start-1 lg:pt-12">
        <ResumeDetails />
      </main>
      <div className="mx-12 lg:mr-0 lg:ml-8 gap-4 mb-16 flex justify-center lg:block lg:space-y-8 lg:col-end-2 lg:col-start-1 lg:row-start-1">
        <ProfileCard />
        <TechStack items={i18n.t('resume.core-tech.items') as string[]}>
          {i18n.t('resume.core-tech.title')}
        </TechStack>
        <TechStack items={i18n.t('resume.others.items') as string[]}>
          {i18n.t('resume.others.title')}
        </TechStack>
      </div>
      <footer className="order-3 mt-24 text-primary-600 mx-12">
        <EludaLogo />
      </footer>
    </div>
  );
}
