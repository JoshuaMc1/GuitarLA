import { Link, useLocation } from "@remix-run/react";
import { generateId } from "~/utils/helpers.js";
import imagen from "../../public/img/carrito.png";

const Navegacion = () => {
  const location = useLocation();

  const navLinks = [
    {
      path: "/",
      pathname: "Inicio",
      isActive: location.pathname === "/" ? "active" : "",
    },
    {
      path: "/nosotros",
      pathname: "Nosotros",
      isActive: location.pathname === "/nosotros" ? "active" : "",
    },
    {
      path: "/guitarras",
      pathname: "Tienda",
      isActive: location.pathname === "/guitarras" ? "active" : "",
    },
    {
      path: "/blog",
      pathname: "Blog",
      isActive: location.pathname === "/blog" ? "active" : "",
    },
  ];

  return (
    <nav className="navegacion">
      {navLinks.map((link) => (
        <Link key={generateId()} to={link.path} className={link.isActive}>
          {link.pathname}
        </Link>
      ))}
      <Link to="/carrito">
        <img src={imagen} alt="Carrito de compras" />
      </Link>
    </nav>
  );
};

export default Navegacion;
