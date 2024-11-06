import { useContext } from 'react';
import { SazerContext } from '../context/AppContext';
import LoaderTwo from './LoaderTwo';
import recentNews from '../api/recentNews.js'
import info from '../api/info.js'

export default function NewsSection() {

  const { isLoader, selectedCompany} = useContext(SazerContext);

  const companyNews = recentNews[parseInt(selectedCompany)];
  const companyInfo = info[parseInt(selectedCompany)];

  return (
    <>
      <h2 className='text-[#E1E6EC] text-2xl font-semibold '>Recent News</h2>
      <div className='h-2/4 text-[#E1E6EC] overflow-y-auto'>
        {isLoader ? (
          <div>
            <LoaderTwo />
            <LoaderTwo />
            <LoaderTwo />
          </div>
        ) : (
          <div>
            <div>
              {companyNews ? (
                <ul className="space-y-4">
                  {companyNews.news.map((newsItem) => (
                    <li
                      key={newsItem.id}
                      className={`border w-[95%] ${companyInfo.recommendation == 0 ? 'border-blue-300' : companyInfo.recommendation > 0 ? 'border-green-300' : 'border-red-300' } rounded-lg shadow-md p-4 bg-gray-800 hover:shadow-lg transition-shadow`}
                    >
                      <h3 className="text-lg font-bold text-white">{newsItem.title}</h3>
                      <p className="text-sm text-gray-400 mb-2">{newsItem.date}</p>
                      <p className="text-gray-100">{newsItem.description}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-gray-500">No hay noticias de {companyInfo.company} disponibles.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}