import { Link, useParams } from 'react-router-dom';

const CountriesDetails = () => {
  const { detailsId } = useParams();
  return (
    <div>
      <h3>{detailsId}</h3>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default CountriesDetails;
