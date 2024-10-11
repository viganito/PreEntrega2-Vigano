import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../service/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

  const manejadorFormulario = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Completa los datos del campo. Gracias!!!");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Error, no coinciden los campos. Intente nuevamente!");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    addDoc(collection(db, "ordenes"), orden)
      .then(docRef => {
        setOrdenId(docRef.id);
        vaciarCarrito();
        setNombre("");
        setApellido("");
        setTelefono("");
        setEmail("");
        setEmailConfirmacion("");
      })
      .catch(error => {
        console.log("Error, intente al finalizar ", error);
        setError("Error al crear su orden. Por favor hagalo de nuevo");
      });
  };

  return (
    <div>
      <h2> Checkout:</h2>

      <form onSubmit={manejadorFormulario}>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>{producto.item.nombre}</p>
            <p>
              {producto.item.precio} x {producto.cantidad}
            </p>
            <p>{producto.item.precio}</p>
            <hr />
          </div>
        ))}
        <div>
          <label htmlFor=""> Nombre </label>
          <input
            type="text"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div>
          <label htmlFor=""> Apellido </label>
          <input
            type="text"
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
          />
        </div>
        <div>
          <label htmlFor=""> Telefono </label>
          <input
            type="text"
            onChange={(e) => setTelefono(e.target.value)}
            value={telefono}
          />
        </div>
        <div>
          <label htmlFor=""> Email </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor=""> Email Confirmacion </label>
          <input
            type="email"
            onChange={(e) => setEmailConfirmacion(e.target.value)}
            value={emailConfirmacion}
          />
        </div>
        {error && <p style={{ color: "blue" }}> {error}</p>}

        <button type="submit"> Finalizar Compra </button>
        {ordenId && (
          <strong>
            ¡Muchas gracias por comprar! Tu numero es: {ordenId}
          </strong>
        )}
      </form>
    </div>
  );
};

export default Checkout;