import { Container } from 'react-bootstrap'

const Inicio = () => {
  return (
    <>
      <Container className='mt-3'>
        <div className='d-flex flex-column justify-content-center align-items-center vh-100 text-white overlay'>
          <h1 className='text-uppercase'>Bienvenido Maestro Pokémon</h1>
          <p>Descubre tu Pokémon favorito y conoce sus poderes</p>
        </div>
      </Container>
    </>
  )
}

export default Inicio
