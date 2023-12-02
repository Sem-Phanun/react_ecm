import { NavLink } from 'react-router-dom'
import { navbarList } from '../../../data/data'
import './SubHeader.scss'
const SubHeader = () => {
  return (
    <>
      <nav className="categoryHeader">
        <h1>Categories</h1>
        <ul className="categoryList">
          {navbarList.map((navbar, index) => {
            return (
              <li key={index}>
                <NavLink to={navbar.route}>{navbar.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default SubHeader;
