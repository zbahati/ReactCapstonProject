import { Link } from 'react-router-dom';

const NavBar = (prop) => {
  const { title } = prop;
  return (
    <div className="navbar">
      <Link to="/">
        <i className="fa-solid fa-arrow-left" id="back-button" />
      </Link>
      <h3>{ title }</h3>
      <div className="nav-right">
        <Link to="/underContruction"><i className="fa-solid fa-microphone" /></Link>
        <Link to="/underContruction"><i className="fa-solid fa-gear" /></Link>
      </div>
    </div>
  );
};

export default NavBar;
