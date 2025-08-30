import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success mb-4">
      <div className="container-fluid">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex flex-row gap-3">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/music">Musica</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/formulario">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
