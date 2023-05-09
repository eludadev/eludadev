export default function MenuLink({
  children,
}: {
  children: string;
  href?: string;
  title: string;
}): JSX.Element {
  return (
    <span className="font-normal py-4 block text-primary-700 text-xl">
      {children}
    </span>
  );
}
