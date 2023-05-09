export default function MenuLink({
  children,
  href,
  title,
}: {
  children: string;
  href: string;
  title: string;
}): JSX.Element {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={title}
      className="font-normal py-4 block text-primary-700 text-xl"
    >
      {children}
    </a>
  );
}
