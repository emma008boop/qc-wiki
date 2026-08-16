import Button from "../Buttons/Button";
import "./Navbar.scss";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="/" className="navbar__brand">
          QC Wiki
        </a>

        <nav className="navbar__navigation" aria-label="Navegación principal">
          <Button
            variant="secondary"
          >
            Crear cuenta
          </Button>      
          <Button>
            Iniciar sesión
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;