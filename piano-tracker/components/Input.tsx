interface InputProps {
  children: string;
  value: number;
  set: (newValue: number) => void;
  min?: number;
  max?: number;
}

const Input = ({ value, children, set, min = -200, max = 200 }: InputProps) => {
  return (
    <label class="flex items-center mx-2">
      <code class="w-[100px]">{children}</code>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onInput={(e) => {
          if (e.target) set(parseFloat((e.target as HTMLInputElement).value));
        }}
      />
      <input
        value={value}
        type="number"
        min={min}
        max={max}
        onInput={(e) => {
          if (e.target) {
            set(
              parseFloat((e.target as HTMLInputElement).value) || 0,
            );
          }
        }}
      />
    </label>
  );
};

export default Input;
