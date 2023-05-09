import ResumeExperience, {
  type Job,
} from '~/components/Display/ResumeExperience';
import { i18n } from '~/i18n';

export default function ResumeDetails(): JSX.Element {
  return (
    <div>
      <div className="mx-12 lg:mx-24">
        <header className="">
          <h1 className="text-6xl text-primary-600 font-extrabold">
            {i18n.t('resume.name')}
          </h1>
          <small className="text-lg font-normal mt-4 block">
            {i18n.t('resume.title')}
          </small>
          <p className="text-base font-light mt-16 text-black/60">
            {i18n.t('resume.subtitle')}
          </p>
        </header>

        <section className="mt-20 pt-10 border-t border-primary-300">
          <h2 className="font-bold text-primary-600 text-xl relative before:absolute before:w-[110%] before:translate-x-[-5%] before:h-2 before:bg-secondary-300 before:translate-y-4 w-fit">
            <span className="relative z-10">
              {i18n.t('resume.experience.title')}
            </span>
          </h2>
          <p className="text-base font-light mt-6 text-black/60">
            {i18n.t('resume.experience.subtitle')}
          </p>
          {(i18n.t('resume.experience.jobs') as Job[]).map((job) => (
            <ResumeExperience job={job} key={job.description} />
          ))}
        </section>

        <section className="mt-20 pt-10 border-t border-primary-300">
          <h2 className="font-bold text-primary-600 text-xl relative before:absolute before:w-[110%] before:translate-x-[-5%] before:h-2 before:bg-secondary-300 before:translate-y-4 w-fit">
            <span className="relative z-10">
              {i18n.t('resume.projects.title')}
            </span>
          </h2>
          <p className="text-base font-light mt-6 text-black/60">
            <span className="mx-2">{i18n.t('resume.projects.subtitle.0')}</span>
            <a
              className="font-bold text-primary-600 mx-1 inline-block relative before:absolute before:w-[105%] before:translate-x-[-2.5%] before:h-1.5 before:bg-secondary-300 before:translate-y-3.5 w-fit"
              href={i18n.t('resume.projects.subtitle.1.link')}
            >
              <span className="relative z-10">
                {i18n.t('resume.projects.subtitle.1.text')}
              </span>
            </a>
            <span className="mx-2">{i18n.t('resume.projects.subtitle.2')}</span>
          </p>
        </section>
      </div>
    </div>
  );
}
