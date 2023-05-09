import LinkCard from '~/components/Display/LinkCard';
import ContactForm from '~/components/Forms/ContactForm';
import ExternalLink from '~/components/Interactive/ExternalLink';
import InternalLink from '~/components/Interactive/InternalLink';
import MenuLink from '~/components/Interactive/MenuLink';
import HeroSection from '~/components/Sections/HeroSection';
import InfoSection from '~/components/Sections/InfoSection';
import StorySection from '~/components/Sections/StorySection';
import { i18n } from '~/i18n';

export default function Home(): JSX.Element {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <InfoSection />
      <StorySection />
      <section className="px-8 py-20 lg:h-screen lg:grid lg:grid-cols-2 lg:items-center lg:justify-items-center lg:bg-primary-50">
        <LinkCard>
          <LinkCard.Title>{i18n.t('work-link.title')}</LinkCard.Title>
          <LinkCard.Description>
            {i18n.t('work-link.description')}
          </LinkCard.Description>
          <InternalLink className="mt-12">
            {i18n.t('work-link.link')}
          </InternalLink>
        </LinkCard>
        <LinkCard>
          <LinkCard.Title>{i18n.t('blog-link.title')}</LinkCard.Title>
          <LinkCard.Description>
            {i18n.t('blog-link.description')}
          </LinkCard.Description>
          <InternalLink className="mt-12">
            {i18n.t('blog-link.link')}
          </InternalLink>
        </LinkCard>
      </section>
      <section className="px-12 py-16 lg:h-screen lg:py-32">
        <h2 className="font-extrabold text-2xl lg:text-5xl lg:text-center text-primary-700">
          {i18n.t('contact.title')}
        </h2>
        <p className="font-light mt-2 text-sm lg:text-lg lg:text-center lg:mx-auto lg:w-96">
          {i18n.t('contact.description')}
        </p>
        <ContactForm />
      </section>
      <section className="px-12 py-16 bg-primary-950 lg:h-screen lg:items-center lg:grid">
        <div>
          <div className="lg:grid lg:grid-cols-2">
            <article>
              <h2 className="text-sm font-light uppercase text-primary-100 lg:text-xl">
                {i18n.t('links.title')}
              </h2>
              <ExternalLink
                href={i18n.t('links.email.value')}
                title={i18n.t('links.email.title')}
              >
                {i18n.t('links.email.display')}
              </ExternalLink>
              <ExternalLink
                href={i18n.t('links.telegram.value')}
                title={i18n.t('links.telegram.title')}
              >
                {i18n.t('links.telegram.display')}
              </ExternalLink>
            </article>
            <article className="mt-12 lg:mt-0">
              <ExternalLink
                href={i18n.t('links.work.value')}
                title={i18n.t('links.work.title')}
              >
                {i18n.t('links.work.display')}
              </ExternalLink>
              <ExternalLink
                href={i18n.t('links.shelf.value')}
                title={i18n.t('links.shelf.title')}
              >
                {i18n.t('links.shelf.display')}
              </ExternalLink>
              <ExternalLink
                href={i18n.t('links.resume.value')}
                title={i18n.t('links.resume.title')}
              >
                {i18n.t('links.resume.display')}
              </ExternalLink>
            </article>
          </div>
          <footer className="font-light block w-full lg:flex lg:justify-between text-secondary-300 mt-32 pt-12 border-t-2 border-primary-300">
            <span>{i18n.t('footer')}</span>
            <article className="pl-16 gap-8 lg:items-center hidden lg:flex">
              <a
                href={i18n.t('links.github.value')}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={i18n.t('links.github.title')}
                className="font-normal block text-secondary-300 text-xl"
              >
                {i18n.t('links.github.display')}
              </a>
              <a
                href={i18n.t('links.linkedin.value')}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={i18n.t('links.linkedin.title')}
                className="font-normal block text-secondary-300 text-xl"
              >
                {i18n.t('links.linkedin.display')}
              </a>
            </article>
          </footer>
        </div>
      </section>
    </>
  );
}
