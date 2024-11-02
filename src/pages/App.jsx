import { SazerProvider } from '../context/AppContext';
import AppUI from './AppUI';

export default function App() {
  return (
    <SazerProvider>
      <AppUI />
    </SazerProvider>
  );
}