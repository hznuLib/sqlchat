interface Props {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
}

const TextField = (props: Props) => {
  const { value, disabled, className, placeholder, onChange } = props;

  return (
    <input
      className={`${className || ""} w-full border px-3 py-2 rounded-lg dark:border-zinc-700 dark:bg-zinc-800 focus:outline-2`}
      type="text"
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TextField;
