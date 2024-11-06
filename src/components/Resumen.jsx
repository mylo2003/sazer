import { useContext } from 'react';
import info from '../api/info.js'
import { SazerContext } from '../context/AppContext.jsx';

export default function Resumen() {

  const { selectedCompany } = useContext(SazerContext);

  const companyInfo = info[parseInt(selectedCompany)];

  return (
    <div className={`w-[95%] h-full rounded-lg border ${companyInfo.recommendation == 0 ? 'border-blue-300' : companyInfo.recommendation > 0 ? 'border-green-300' : 'border-red-300' } shadow-md bg-gray-800 px-6 py-2 hover:shadow-xl transition-shadow`}>
      <h3 className="text-2xl font-semibold text-gray-100">{companyInfo.company}</h3>
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium text-gray-400">{companyInfo.acron}</p>
        <p className={`text-lg font-bold ${companyInfo.percentage < 0 ? 'text-red-400' : 'text-green-600'}`}>
          {companyInfo.percentage}%
        </p>
      </div>
      <p className="text-gray-100">$ <span className={`${companyInfo.recommendation == 0 ? 'text-blue-300' : companyInfo.recommendation > 0 ? 'text-green-300' : 'text-red-300' } font-semibold`}>{companyInfo.stockPrice}</span></p>
      <p className={`text-sm ${companyInfo.recommendation == 0 ? 'text-blue-300' : companyInfo.recommendation > 0 ? 'text-green-300' : 'text-red-300' } overflow-y-hidden`}>{companyInfo.message}</p>
    </div>
  );
}