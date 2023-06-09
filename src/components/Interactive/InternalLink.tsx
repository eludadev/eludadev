import clsx from 'clsx';

import RightArrowIcon from '../Icons/RightArrowIcon';

export default function InternalLink({
  children,
  className,
  href,
}: {
  children: string;
  className?: string;
  href?: string;
}): JSX.Element {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={clsx(
        'px-8 py-2 border-[1px] focus:text-white lg:hover:text-white text-primary-700 border-primary-700 group inline-block hover:before:lg:-translate-x-0 hover:slg:text-white relative before:absolute before:inset-0 before:bg-primary-700 before:z-10 focus:before:translate-x-0 before:-translate-x-full overflow-hidden before:transition-transform',
        className,
      )}
    >
      <div className="z-10 flex items-center gap-4 relative">
        <span className="text-xs uppercase font-medium lg:text-sm">
          {children}
        </span>
        <RightArrowIcon />
      </div>
    </a>
  );
}
