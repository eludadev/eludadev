export default function FormInput({
  type,
  children,
  placeholder,
  value,
  onChange,
}: {
  type: string;
  placeholder: string;
  children: string;
  value: string;
  onChange: (value: string) => void;
}): JSX.Element {
  return (
    <div className="py-4 my-4 relative">
      <input
        required
        type={type}
        name={type}
        id={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="peer outline-none shadow-none text-sm font-normal py-2 border-b border-primary-800 w-full focus:placeholder:opacity-0 focus:border-primary-600 focus:text-primary-600 text-primary-900 accent-primary-600 placeholder:text-primary-800 placeholder:transition-opacity"
      />
      <label
        htmlFor={type}
        className="font-light text-xs capitalize text-primary-800 peer-focus:text-primary-600 top-0 absolute left-0 w-full"
      >
        {children}
      </label>
    </div>
  );
}
