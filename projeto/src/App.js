import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './contexts';
import { Router } from './Router'
import './App.css';
// import { Header, Content, Footer } from './components';
// import { Home } from './pages';


function App() {
  return (

  <AppContextProvider>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </AppContextProvider>
  );
}

export { App };
