interface ButtonProps {
  cor?: 'green' | 'blue' | 'gray';
  className?: string;
  children: any;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`
      bg-gradient-to-r from-${props.cor ?? 'yellow'}-500 to-${props.cor ?? 'yellow'}-600 text-gray-100
      hover:opacity-80 duration-200
      px-4 py-2 rounded-md
      ${props.className}
      `}
    >
      {props.children}
    </button>
  );
}
