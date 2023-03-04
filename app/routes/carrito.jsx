import { useOutletContext } from "@remix-run/react";
import { useState, useEffect } from "react";
import styles from "~/styles/carrito.css";
import { ClientOnly } from "remix-utils";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export function meta() {
  return {
    title: "GuitarLA - Carrito de Compras",
    description:
      "Venta de guitarras, música, blog, carrito de compras, tienda...",
  };
}

const Carrito = () => {
  const [total, setTotal] = useState(0);
  const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext();

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );

    setTotal(calculoTotal);
  }, [carrito]);

  return (
    <ClientOnly fallback={"Cargando..."}>
      {() => (
        <main className="contenedor">
          <h1 className="heading">Carrito de compra</h1>
          <div className="contenido">
            <div className="carrito">
              <h2>Artículos</h2>
              {carrito?.length === 0
                ? "Carrito vació"
                : carrito?.map((producto) => (
                    <div className="producto" key={producto.id}>
                      <div>
                        <img
                          src={producto.imagen}
                          alt={`Imagen del producto ${producto.nombre}`}
                        />
                      </div>
                      <div>
                        <p className="nombre">{producto.nombre}</p>
                        <p>Cantidad: </p>
                        <select
                          className="select"
                          value={producto.cantidad}
                          onChange={(e) =>
                            actualizarCantidad({
                              cantidad: parseInt(e.target.value),
                              id: producto.id,
                            })
                          }
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                        <p className="precio">
                          Precio: <span>L. {producto.precio}</span>
                        </p>
                        <p className="subtotal">
                          Subtotal:{" "}
                          <span>L. {producto.cantidad * producto.precio}</span>
                        </p>
                      </div>
                      <button
                        onClick={(e) => eliminarGuitarra(producto.id)}
                        type="button"
                        className="btn-eliminar"
                      >
                        X
                      </button>
                    </div>
                  ))}
            </div>
            <aside className="resumen">
              <h3>Resumen del Pedido</h3>
              <p>Total a pagar: L.{total}</p>
            </aside>
          </div>
        </main>
      )}
    </ClientOnly>
  );
};

export default Carrito;
