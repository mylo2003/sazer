import { useContext } from 'react';
import { SazerContext } from '../context/AppContext';
import Resumen from './Resumen';
import LoaderTwo from './LoaderTwo.jsx';


export default function Statistics() {

  const { isLoader } = useContext(SazerContext);

  return (
    <div className='h-2/4 text-[#E1E6EC] rounded-xl'>
      {
        isLoader ? (
          <div className='flex flex-col h-[50%] justify-center items-center'>
            <LoaderTwo />
            <LoaderTwo />
            <LoaderTwo />
          </div>
        ) : (
          <div className='h-[88%]'>
            <Resumen/>
          </div>
        )
      }
    </div>
  );
}
