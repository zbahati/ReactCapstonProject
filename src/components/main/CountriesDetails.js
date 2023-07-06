import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCountryDetails } from '../../redux/countries/countriesSlice';
import NavBar from '../navbar/Navbar';

const CountriesDetails = () => {
  const { detailsId } = useParams();
  const { countryDetailsData, message, loading } = useSelector(
    (state) => state.countries,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountryDetails(detailsId));
  }, [dispatch, detailsId]);
  return (
    <div>
      {loading ? (
        <div>Loading ..</div>
      ) : (
        countryDetailsData.length > 0
        && countryDetailsData.map((item) => (
          <div className="details-container" key={item.cioc}>
            <div className="country-details-title">
              <NavBar title={item.name.common} />
            </div>
            <div className="details">
              <div className="country-detail-img">
                <img src={item.flags.png} alt={item.flags.alt} />
              </div>
              <div className="desc-container">
                <h3>MORE-DETAILS</h3>
                <div className="title">
                  <p>
                    Official Name:
                    {' '}
                    {item.name.official}
                  </p>
                  <p>
                    Capital Name:
                    {' '}
                    {item.capital}
                  </p>
                  <p>
                    Population:
                    {' '}
                    {item.population}
                  </p>
                  <p>
                    Continent:
                    <span>{item.continents}</span>
                  </p>
                  <p>
                    Region:
                    <span>{item.region}</span>
                  </p>
                  <p>
                    Sub Region:
                    <span>{item.subregion}</span>
                  </p>
                  <p>
                    Language:
                    <span>
                      {Object.values(item.languages)
                        .map((languages) => languages)
                        .join(',')}
                    </span>
                  </p>
                </div>
                <div className="currencies">
                  <p>
                    currencies:
                    <span>
                      {Object.values(item.currencies).map((currency) => currency.name).join(',')}
                    </span>
                  </p>
                  <p className="borders-group">
                    Borders:
                    {item.borders ? (
                      item.borders.map((border) => (
                        <Link key={border} to={`/${border}`} className="border">
                          <p>
                            {border}
                          </p>
                        </Link>
                      ))
                    ) : (<span>No border</span>)}
                  </p>
                </div>
              </div>

            </div>

          </div>
        ))
      )}
      {message && <div>{message}</div>}
    </div>
  );
};

export default CountriesDetails;
