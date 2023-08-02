import { useNavigate } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 onClick={() => navigate('/')}>Teachers' Dashboard</h1>
      <Navbar />
    </header>
  );
};

export default Header;
