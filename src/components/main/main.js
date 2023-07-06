import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../../redux/countries/countriesSlice';
import NavBar from '../navbar/Navbar';
import FilterSearch from './filter';

const Main = () => {
  const {
    countriesData, loading, message, searchName,
  } = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  const data = countriesData.filter((item) => item.name.common.toLowerCase().includes(searchName));
  return (
    <main>
      <NavBar title="All Countries" />
      <FilterSearch />
      <div className="main-content">

        {loading ? (
          <div>Loading ..</div>) : (
          data.length > 0
          && data.map((item) => (
            <div className="countryCard" key={item.cioc}>
              <Link
                to={`/${item.cca3}`}
              >
                <div className="img-container">
                  <img src={item.flags.png} alt={item.flags.alt} />
                  <i className="fa-solid fa-circle-arrow-right" />
                </div>
                <ul className="country-short-description">
                  <li>
                    <span className="countryname">
                      {item.name.common}
                    </span>
                  </li>
                  <li>
                    <span className="pop">
                      Population:
                      {' '}
                      {item.population}
                    </span>
                  </li>
                </ul>

              </Link>
            </div>
          )))}
        { message ? (<div>{message}</div>) : null}
      </div>
    </main>
  );
};

export default Main;
