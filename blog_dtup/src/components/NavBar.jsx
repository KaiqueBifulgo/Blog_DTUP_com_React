import { Link } from "react-router-dom"

// ESTILOS
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to={`/`}>Blog DTUP</Link>
        </h2>
        <ul>
            <li>
                <Link to={`/`}>Home</Link>
            </li>
            <li>
                <Link to={`/new`} className="new-btn">Criar novo post</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar