import { useContext } from 'react';
import { SazerContext } from '../context/AppContext';
import LoaderTwo from './LoaderTwo';

export default function NewsSection() {

  const { isLoader } = useContext(SazerContext);

  return (
    <>
      <h2 className='text-[#E1E6EC] text-2xl font-semibold '>Recent News</h2>
      <div className='h-2/4 text-[#E1E6EC] overflow-y-auto'>
        {isLoader ? (
          <div>
            <LoaderTwo/>
            <LoaderTwo/>
            <LoaderTwo/>
          </div>
        ) : (
          <div>
            <div>
              <p>
                Recientes informes de analistas del sector tecnológico sugieren que Apple podría enfrentar obstáculos en su crecimiento a corto plazo...
              </p>
              <span className='text-[#5E86B9] inline-block mt-2'>Market feels reserved</span>
            </div>
            <div>
              <p>
                Analistas del sector tecnológico ven en Google un fuerte potencial de crecimiento, haciendo de este un buen momento para considerar una inversión en la compañía...
              </p>
              <span className='text-[#408D70] inline-block mt-2'>Market feels positive</span>
            </div>
            <div>
              <p>
                En medio de una creciente competencia en el mercado de vehículos eléctricos (VE) y desafíos en su cadena de suministro, Tesla se enfrenta a dificultades que han encendido las alarmas entre los analistas...</p>
              <span className='text-[#A14C4C] inline-block mt-2'>Market feels angry</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}