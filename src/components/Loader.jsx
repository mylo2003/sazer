export default function Loader() {
  return (
    <>
      <div className="flex flex-row gap-2">
        <div className="w-8 h-8 rounded-full bg-green-400  animate-bounce [animation-delay:.7s]"></div>
        <div className="w-8 h-8 rounded-full bg-green-300 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-8 h-8 rounded-full bg-green-200 animate-bounce [animation-delay:.7s]"></div>
      </div>
    </>
  );
}