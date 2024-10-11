import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { carrito, total, cantidadTotal, vaciarCarrito } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2>Acá no se reflejan algunos productos</h2>
        <Link to="/">Mostrar Productos</Link>
      </>
    );
  }

  return (
    <div>
      {carrito.map((producto) => (
        <CartItem key={producto.item.id} {...producto} />
      ))}

      <h3>Total: ${total}</h3>
      <h3>Cantidad Total: {cantidadTotal}</h3>
      <button onClick={() => vaciarCarrito()}>
        {" "}
        Eliminar productos del carrito{" "}
      </button>
      <Link to="/checkout">Terminar Compra</Link>
    </div>
  );
};

export default Cart;
