import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <Link to="/">All Farmer</Link>
      </div>
      <div className="header-links">
        <a href="/">Home</a>
      </div>
    </header>
  );
}

export default Header;
