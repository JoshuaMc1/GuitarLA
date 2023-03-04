import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return {
    title: "GuitarLA - Sobre Nosotros",
    description: "Venta de guitarras, blog de música y mas...",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />

        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            optio esse nulla tempora minima nobis, velit exercitationem dolorem
            expedita beatae, temporibus
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            optio esse nulla tempora minima nobis, velit exercitationem dolorem
            expedita beatae, temporibus
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
