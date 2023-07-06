import {
  Routes, Route, BrowserRouter,
} from 'react-router-dom';
import Main from './components/main/main';
import CountriesDetails from './components/main/CountriesDetails';
import ErrorPage from './components/main/ErrorPage';
import UnderConstruction from './components/main/underContruction';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path=":detailsId" element={<CountriesDetails />} />
        <Route path="/underContruction" element={<UnderConstruction />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
