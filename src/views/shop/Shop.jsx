import { NavLink } from 'react-router-dom'
import { navbarList } from '../../data/data'
import './Shop.scss'
const Shop = () => {
  return (
    <>
      <main className="shopContainer">
        <aside className="asideContainer">
          <nav className="categoryHeader">
            <h1>Categories</h1>
            <ul className="categoryList">
            {
              navbarList.map((navbar, index) => {
                return (
                  <li key={index}>
                    <NavLink to={navbar.route}>{navbar.name}</NavLink>
                  </li>
                )
              })
            }
            </ul>
          </nav>
        </aside>
        <main className="shop-category">
          dfsa
        </main>
      </main>
    </>
  )
}

export default Shop