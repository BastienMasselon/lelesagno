// == Import
import flower from '../assets/img/icon-header.png';
import burgerIcon from '../assets/img/icon-burger.svg';

// Dependencies
import { NavLink } from 'react-router-dom';

// == Composant
function Header() {
  return (
    <header>
      <div className="bg-UT-orange h-16 flex justify-between items-center">
        <img src={flower} alt="palmier" className="w-8 h-8 ml-3" />
        <img src={burgerIcon} alt="palmier" className="stroke-white w-14 mr-3" />
      </div>
      <nav className="bg-selective-yellow uppercase tracking-widest">
        <ul>
          <li>
            <NavLink to='home'>Accueil</NavLink>
          </li>
          <li>
            <NavLink to='videos'>Vidéos</NavLink>
          </li>
          <li>
            <NavLink to='publications'>Publications</NavLink>
          </li>
          <li>
            <NavLink to='recipe'>Recettes</NavLink>
          </li>
          <li>
            <NavLink to='contact'>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// == Export
export default Header;
