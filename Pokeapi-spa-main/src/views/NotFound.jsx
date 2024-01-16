import { Container } from 'react-bootstrap'
import Mensaje from '../components/Mensaje'
import { Link } from 'react-router-dom'

const NotFound = () => {
  const mensaje = 'La página que buscas no existe'

  return (
    <>
      <Container className='text-center mt-5'>
        {mensaje && (
          <Mensaje tipo='alert-danger'>
            <h1>Uuups! Algo salió mal</h1>
            {mensaje}
          </Mensaje>
        )}
        <div>
          <ul className='nav-list'>
            <li>
              <Link to='/'>Inicio</Link>
            </li>
            <li> | </li>
            <li>
              <Link to='/pokemones'>Pokémones</Link>
            </li>
          </ul>
        </div>
      </Container>
    </>
  )
}

export default NotFound
