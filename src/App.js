import GlobalStyles from './styles';
import Routes from './routes'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <>
      <GlobalStyles/>
      <Routes/>
      <ToastContainer/>
    </>
  );
}

export default App;
