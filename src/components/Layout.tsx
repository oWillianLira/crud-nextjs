import Title from './Title';

interface LayoutProps {
  title: string;
  children: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={`
      flex flex-col md:w-2/3
      bg-white text-gray-700 rounded-md
    `}
    >
      <Title>{props.title}</Title>
      <div className="p-4">{props.children}</div>
    </div>
  );
}
