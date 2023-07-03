import {
  Routes, Route, BrowserRouter,
} from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import Main from './components/main/main';
import CountriesDetails from './components/main/CountriesDetails';
import ErrorPage from './components/main/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path=":detailsId" element={<CountriesDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
