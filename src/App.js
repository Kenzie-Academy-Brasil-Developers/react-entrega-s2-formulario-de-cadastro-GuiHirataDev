import GlobalStyles from './styles';
import Routes from './routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import UserProvider from './contexts/UserContext';
import TechProvider from './contexts/TechContext';

function App() {
  return (
    <UserProvider>
      <TechProvider>
        <GlobalStyles/>
        <Routes/>
        <ToastContainer/>
      </TechProvider>
    </UserProvider>
  );
}

export default App;
