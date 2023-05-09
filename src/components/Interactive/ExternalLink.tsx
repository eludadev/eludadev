export default function ExternalLink({
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
      className="font-light mt-2 block lg:text-xl text-secondary-300"
    >
      {children}
    </a>
  );
}
