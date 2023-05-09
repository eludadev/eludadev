import { i18n } from '~/i18n';

export default function StorySection(): JSX.Element {
  return (
    <section className="bg-primary-700 px-12 lg:py-auto lg:px-32 pt-16 pb-[calc(60%_+_10rem)] bg-[url(/assets/working.svg)] bg-[length:80%] bg-[center_bottom_2rem] bg-no-repeat lg:bg-[length:35rem] lg:bg-[right_8rem_center] lg:h-screen">
      <div className="lg:max-w-sm">
        <h2 className="text-secondary-300 font-extrabold text-4xl lg:text-6xl">
          {i18n.t('story.title')}
        </h2>
        <p className="text-sm lg:text-base lg:mt-6 font-light mt-4 text-white whitespace-break-spaces">
          {i18n.t('story.content')}
        </p>
      </div>
    </section>
  );
}
