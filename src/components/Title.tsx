export default function Title(props) {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="px-4 py-2 text-2xl">{props.children}</h1>
      <hr className="border-2 border-gray-300" />
    </div>
  );
}
