import NewsSection from "./NewsSection";
import Statistics from "./Statistics";

export default function SubSection() {
  return (
    <div className='bg-[#010409] text-[#E1E6EC] h-[90%] flex flex-col gap-5 rounded-xl px-8 pt-8'>
      <NewsSection />
      <Statistics/>
    </div>
  );
}