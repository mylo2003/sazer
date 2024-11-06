import { useContext } from 'react';
import { SazerContext } from '../context/AppContext';
import Loader from './Loader';

export default function MainSection() {

  const { isLoader } =  useContext(SazerContext);

  return (
    <div className="bg-[#010409] text-[#E1E6EC] w-full h-[90%] rounded-xl px-8 pt-8 pb-28">
      {
        isLoader ? (
          <div className="flex flex-row gap-2">
            <div className="animate-pulse bg-green-400 w-12 h-12 rounded-full"></div>
            <div className="flex flex-col gap-2">
              <div className="animate-pulse bg-green-300 w-64 h-5 rounded-full"></div>
              <div className="animate-pulse bg-green-300 w-72 h-5 rounded-full"></div>
            </div>
          </div>

        ) : (<h2 className="text-[#E1E6EC] text-4xl font-semibold mb-5">Amazon inc.</h2>)
      }
     
      <div className='h-full flex flex-col justify-center'>
      {isLoader ? (
        <Loader />
      ) : (
        <div>
          <p>
            Amazon es una de las empresas más sólidas y versátiles en el mercado global, 
            con un crecimiento constante y una diversificación que abarca desde el comercio electrónico hasta servicios de nube, 
            entretenimiento digital y dispositivos inteligentes. Este año, 
            la compañía ha mostrado una fuerte recuperación y expansión en varias de sus líneas de negocio, 
            logrando consolidarse aún más en mercados clave. Además, Amazon ha invertido considerablemente en tecnología 
            innovadora y sostenibilidad, lo que genera confianza en los inversores a largo plazo. Con sus estrategias 
            orientadas al cliente y el crecimiento de sus servicios en la nube con AWS, este podría ser un buen momento
            para invertir y aprovechar el potencial de crecimiento que aún tiene la empresa en el futuro cercano.
          </p>
          <p className="mt-5">
            Given these factors, investing in Amazon presents a strategic opportunity for those looking to 
            capitalize on a strong, forward-moving stock.
          </p>
          <p className="mt-5 text-[#61CCA7]">
            SAZER recommends investing on the upside, 
            he estimates that you will generate 15% profits in a matter of 2 months. You have to hold the position.
          </p>
        </div>
      )}
      </div>
      
    </div>
  );
}
