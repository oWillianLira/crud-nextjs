interface ButtonProps {
  color?: 'green' | 'blue' | 'gray';
  className?: string;
  children: any;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`
      bg-gradient-to-r from-${props.color ?? 'yellow'}-500 to-${props.color ?? 'yellow'}-600 text-gray-100
      hover:opacity-80 duration-200
      px-4 py-2 rounded-md
      ${props.className}
      `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
