import ChartSection from "./ChartSection";
import MainSection from "./MainSection";
import NewsSection from "./NewsSection";
import SideBar from "./SideBar";

export default function SazerMenu() {
  return (
    <main className="bg-[#0D1117] grid grid-cols-5 grid-rows-5 gap-10 pt-10">
      <div className="row-span-5">
        <SideBar />
      </div>
      <div className="col-span-2 row-span-5">
        <MainSection />
      </div>
      <div className="col-span-2 row-span-3 col-start-4">
        <NewsSection />
      </div>
      <div className="col-span-2 row-span-2 col-start-4 row-start-4">
        <ChartSection />
      </div>
    </main>
  )
}