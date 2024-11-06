import MainSection from './MainSection';
import SideBar from './SideBar';
import SubSection from './SubSection';

export default function SazerMenu() {
  return (
    <main className="bg-[#0D1117] h-[100vh] w-full grid grid-cols-5 grid-rows-5 gap-10 pt-10 mx-5">
      <div className="row-span-5 w-1/6">
        <SideBar />
      </div>
      <div className="col-span-2 row-span-5">
        <MainSection />
      </div>
      <div className="col-span-2 row-span-5 col-start-4 w-5/6">
        <SubSection />
      </div>
    </main>
  );
}