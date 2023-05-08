import TopNav from '~/components/App/TopNav';
import LinkCard from '~/components/Display/LinkCard';
import ContactForm from '~/components/Forms/ContactForm';
import HeroSection from '~/components/HomeSections/HeroSection';
import InfoSection from '~/components/HomeSections/InfoSection';
import StorySection from '~/components/HomeSections/StorySection';
import ExternalLink from '~/components/Interactive/ExternalLink';
import InternalLink from '~/components/Interactive/InternalLink';
import { i18n } from '~/i18n';

export default function Home(): JSX.Element {
  return (
    <>
      <section className="bg-primary-700 pt-8">
        <TopNav />
        <HeroSection />
      </section>
      <InfoSection />
      <StorySection />
      <section className="px-8 py-20">
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
      <section className="px-12 py-16">
        <h2 className="font-extrabold text-2xl text-primary-700">
          {i18n.t('contact.title')}
        </h2>
        <p className="font-light mt-2 text-sm">
          {i18n.t('contact.description')}
        </p>
        <ContactForm />
      </section>
      <section className="px-12 py-16 bg-primary-950">
        <article>
          <h2 className="text-sm font-light uppercase text-primary-100">
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
        <article className="mt-12">
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
        <footer className="font-light block text-secondary-300 mt-32 pt-12 border-t-2 border-primary-300">
          {i18n.t('footer')}
        </footer>
      </section>
    </>
  );
}
