import { i18n } from '~/i18n';

export default function StorySection(): JSX.Element {
  return (
    <section className="bg-primary-700 px-12 pt-16 pb-72 bg-[url(/assets/working.svg)] bg-[length:80%] bg-[center_bottom_2rem] bg-no-repeat">
      <h2 className="text-secondary-300 font-extrabold text-4xl">
        {i18n.t('story.title')}
      </h2>
      <p className="text-sm font-light mt-4 text-white whitespace-break-spaces">
        {i18n.t('story.content')}
      </p>
    </section>
  );
}
