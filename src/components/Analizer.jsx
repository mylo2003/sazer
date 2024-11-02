import { useContext } from "react";
import { SazerContext } from "../context/AppContext";

export default function Analizer() {

  const { setIsReady } = useContext(SazerContext);

  return (
    <div className='flex flex-col justify-center items-center text-white text-center'>
      <h1 className='text-4xl mt-28 font-semibold text-[#E1E6EC]'>SA<span className='text-[#56A171]'>Z</span>ER</h1>
      <h2 className='mt-5 text-3xl '>Type in the company you want to analyze</h2>
      <form className='w-auto bg-[#0D1117] rounded-2xl px-16 mt-10'>
        <div className='py-10 flex flex-col items-center justify-center gap-10'>
          <input
            className='bg-[#282D34] rounded-md text-[#E1E6EC] py-2 px-12 text-center'
            placeholder='amazon inc.'
            type="text"
            // onChange={}
          />

          <button onClick={() => setIsReady(true)} className='bg-[#2D684B] text-[#A0CFC6] py-2 px-8 rounded-md' type="submit">Analyze</button>
        </div>
      </form>
      <span className='text-[#E1E6EC] mt-20'>Why this tool can help you with your financial decisions?</span>
    </div>
  );
}