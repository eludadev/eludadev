export interface Job {
  company: string;
  position: string;
  duration: string;
  description: string;
  milestones: string[];
}

export default function ResumeExperience({ job }: { job: Job }): JSX.Element {
  return (
    <article className="my-8">
      <div className="flex justify-between sm:flex-row flex-col items-center">
        <div className="flex items-center gap-2">
          <ResumeExperience.Title>{job.company}</ResumeExperience.Title>
          <span className="text-black/60 font-light text-lg">—</span>
          <ResumeExperience.Position>{job.position}</ResumeExperience.Position>
        </div>
        <ResumeExperience.Duration>{job.duration}</ResumeExperience.Duration>
      </div>
      <ResumeExperience.Description>
        {job.description}
      </ResumeExperience.Description>
      <ul className="my-2 max-w-md list-['■'] ml-2">
        {job.milestones.map((milestone) => (
          <ResumeExperience.Milestone key={milestone}>
            {milestone}
          </ResumeExperience.Milestone>
        ))}
      </ul>
    </article>
  );
}

ResumeExperience.Title = function Title({
  children,
}: {
  children: string;
}): JSX.Element {
  return <h3 className="text-primary-600 font-bold">{children}</h3>;
};

ResumeExperience.Position = function Title({
  children,
}: {
  children: string;
}): JSX.Element {
  return <small className="text-black/60 font-light text-lg">{children}</small>;
};

ResumeExperience.Duration = function Title({
  children,
}: {
  children: string;
}): JSX.Element {
  return <time className="text-sm text-black/60 font-light">{children}</time>;
};

ResumeExperience.Description = function Title({
  children,
}: {
  children: string;
}): JSX.Element {
  return (
    <p className="text-base font-light mt-4 max-w-md text-black/60">
      {children}
    </p>
  );
};

ResumeExperience.Milestone = function Title({
  children,
}: {
  children: string;
}): JSX.Element {
  return (
    <li className="text-sm text-black/60 font-normal py-2 pl-3">{children}</li>
  );
};
