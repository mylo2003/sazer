import { BrowserRouter, useRoutes } from 'react-router-dom';
import { SazerProvider } from '../context/AppContext';
import Analizer from '../pages/Analizer';
import ChartMain from '../pages/ChartMain';
import NewsMain from '../pages/NewsMain';
import AppUI from './AppUI';


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <AppUI /> },
    { path: '/analizer', element: <Analizer />, },
    { path: '/chart', element: <ChartMain />, },
    { path: '/news', element: <NewsMain />, },
    // { path: '/*', element: <NotFound /> },
  ]);

  return routes;
}

export default function App() {
  return (
    <SazerProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </SazerProvider>
  );
}