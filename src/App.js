import {
  Routes, Route, BrowserRouter,
} from 'react-router-dom';
import NavBar from './components/navbar/Navbar.js';
import Main from './components/main/main.js';
import CountriesDetails from './components/main/CountriesDetails.js';
import ErrorPage from './components/main/ErrorPage.js';

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
