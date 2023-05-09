export default function LinkCard({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  return (
    <article className="px-10 bg-white lg:p-32 py-14 shadow-md lg:shadow-none lg:max-w-xl">
      {children}
    </article>
  );
}

LinkCard.Title = function Title({
  children,
}: {
  children: string;
}): JSX.Element {
  return (
    <h2 className="font-extrabold text-2xl text-primary-700 lg:text-5xl">
      {children}
    </h2>
  );
};

LinkCard.Description = function Description({
  children,
}: {
  children: string;
}): JSX.Element {
  return (
    <p className="font-light mt-2 text-sm lg:text-xl lg:mt-4">{children}</p>
  );
};
