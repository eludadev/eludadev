export default function TechStack({
  children,
  items,
}: {
  children: string;
  items: string[];
}): JSX.Element {
  return (
    <aside className="">
      <div>
        <h2 className="text-primary-600 font-bold lg:text-lg">{children}</h2>
        <ul className="flex flex-wrap gap-1 lg:block lg:pl-2 lg:list-['■']">
          {items.map((item) => (
            <li
              key={item}
              className="text-xs font-normal lg:pl-2 lg:text-sm lg:list-item lg:py-1 text-black/60 after:content-[','] lg:after:hidden last:after:content-[] inline-block"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
