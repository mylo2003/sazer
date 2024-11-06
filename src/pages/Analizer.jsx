import { useContext, useState } from "react";
import { SazerContext } from "../context/AppContext";

export default function Analizer() {

  const { selectedCompany, setSelectedCompany, setIsReady } = useContext(SazerContext);  // Consumir el contexto

  // Manejar el cambio de la selección de la empresa
  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  // Función para manejar el envío
  const handleSubmit = (e) => {
    e.preventDefault();  // Evitar que el formulario se envíe de forma predeterminada
    setIsReady(true);  // Establecer el estado de estar listo
    console.log("Selected Company: ", selectedCompany); // Mostrar la empresa seleccionada
  };

  return (
    <div className='flex flex-col justify-center items-center text-white text-center'>
      <h1 className='text-4xl mt-28 font-semibold text-[#E1E6EC]'>SA<span className='text-[#56A171]'>Z</span>ER</h1>
      <h2 className='mt-5 text-3xl'>Type in the company you want to analyze</h2>
      <form onSubmit={handleSubmit} className='w-auto bg-[#0D1117] rounded-2xl px-16 mt-10'>
        <div className='py-10 flex flex-col items-center justify-center gap-10'>
          <select
            value={selectedCompany}
            onChange={handleCompanyChange} // Cambiar el estado cuando el usuario selecciona una opción
            className='bg-[#282D34] rounded-md text-[#E1E6EC] py-2 px-12 text-center'
          >
            <option value="" disabled>Choose a company</option>
            <option value="0">Amazon Inc.</option>
            <option value="1">Apple</option>
            <option value="2">Nvidia</option>
          </select>

          <button 
            disabled={!selectedCompany} // Desactivar el botón si no se seleccionó ninguna opción
            className='bg-[#2D684B] text-[#A0CFC6] py-2 px-8 rounded-md' 
            type="submit"
          >
            Analyze
          </button>
        </div>
      </form>
      <span className='text-[#E1E6EC] mt-20'>Why this tool can help you with your financial decisions?</span>
    </div>
  );
}
