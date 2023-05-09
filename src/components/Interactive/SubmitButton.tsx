import RightArrowIcon from '../Icons/RightArrowIcon';

export default function SubmitButton({
  children,
}: {
  children: string;
}): JSX.Element {
  return (
    <button
      type="submit"
      className="px-8 w-full py-2 border-[1px] lg:hover:text-white focus:text-white text-primary-700 border-primary-700 group inline-block hover:before:lg:-translate-x-0 hover:slg:text-white relative before:absolute before:inset-0 before:bg-primary-700 before:z-10 focus:before:translate-x-0 before:-translate-x-full overflow-hidden before:transition-transform"
    >
      <div className="z-10 flex items-center gap-4 justify-center relative">
        <span className="text-xs lg:text-lg uppercase font-medium">
          {children}
        </span>
        <RightArrowIcon />
      </div>
    </button>
  );
}
