import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../../redux/countries/countriesSlice';
import './main.css';

const Main = () => {
  const { countriesData, loading, message } = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  return (
    <main>
      <div className="main-content">
        {loading ? (
          <div>Loading ..</div>) : (
          countriesData.length > 0
          && countriesData.map((item) => (
            <Link
              to={`/${item.cca3}`}
              className="card"
              key={item.cioc}
              style={{ backgroundImage: `url(${item.flags.png})` }}
            >
              <span>{item.name.common}</span>
            </Link>
          )))}
        { message ? (<div>{message}</div>) : null}
      </div>
    </main>
  );
};

export default Main;
