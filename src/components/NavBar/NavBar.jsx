import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
            <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className='navbar-brand' to={"/"}>Tienda Comic DGZ</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className={'nav-link'} to={"/"}>Home</NavLink>
            <NavLink className={'nav-link'} to={`/categoria/2`}>Magazine</NavLink>
            <NavLink className={'nav-link'} to={`/categoria/3`}>Figuras</NavLink>
            <NavLink className={'nav-link'} to={`/categoria/4`}>Vestimenta</NavLink>
          </div>
        </div>
      </div>
    </nav>
    <CartWidget/>
    </header>
  )
}

export default NavBar
