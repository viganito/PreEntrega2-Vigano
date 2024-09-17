import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p>Precio: {precio} </p>
        <h3>ID: {id}</h3>
        <Link to={`/item/${id}`}>
          <button type="button">Ingresar</button>
        </Link>
    </div>
  )
}

export default Item