import { useContext } from 'react';
import { SazerContext } from '../context/AppContext';
import { PriceChart } from './PriceChart';
import LoaderTwo from './LoaderTwo';
import info from '../api/info.js'
import Loader from './Loader.jsx';

export default function MainSection() {

  const { isLoader, selectedCompany } =  useContext(SazerContext);

  const companyInfo = info[parseInt(selectedCompany)];

  return (
    <div className="bg-[#010409] text-[#E1E6EC] w-full h-[90%] rounded-xl px-8 pt-8 pb-28">
      {
        isLoader ? (
          <div className="flex flex-row gap-2">
            <div className="flex flex-col gap-2">
              <div className="animate-pulse bg-green-300 w-64 h-5 rounded-full"></div>
              <div className="animate-pulse bg-green-300 w-72 h-5 rounded-full"></div>
            </div>
          </div>
        ) : (<h2 className="text-[#E1E6EC] text-4xl font-semibold mb-5">{companyInfo.company}</h2>)
      }
     
      <div className='h-full flex flex-col justify-center'>
      {isLoader ? (
        <div className='mx-auto'>
          <Loader />
        </div>
      ) : (
        <div className='w-full h-[90%]'>

          <PriceChart />
        </div>
      )}
      </div>
      
    </div>
  );
}
