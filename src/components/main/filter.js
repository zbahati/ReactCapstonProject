import { useDispatch, useSelector } from 'react-redux';
import { searchByTerm } from '../../redux/countries/countriesSlice';

const FilterSearch = () => {
  const { searchName } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const HandleFilter = (e) => {
    dispatch(searchByTerm(e.target.value));
  };
  return (
    <div className="form">
      <input
        className="input"
        type="text"
        value={searchName}
        onChange={HandleFilter}
        placeholder="Search Country"
      />
      <small>Search by LowerCase letters</small>
    </div>
  );
};

export default FilterSearch;
