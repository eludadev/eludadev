export default function LinkCard({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  return <article className="px-10 py-14 shadow-md">{children}</article>;
}

LinkCard.Title = function Title({
  children,
}: {
  children: string;
}): JSX.Element {
  return (
    <h2 className="font-extrabold text-2xl text-primary-700">{children}</h2>
  );
};

LinkCard.Description = function Description({
  children,
}: {
  children: string;
}): JSX.Element {
  return <p className="font-light mt-2 text-sm">{children}</p>;
};
