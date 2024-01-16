import { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Mensaje from '../components/Mensaje'
import MyContext from '../my_context'

const Pokemones = () => {
  const navigate = useNavigate()
  const { id, setId } = useContext(MyContext)
  const [mensaje, setMensaje] = useState('')
  const opciones = [
    'pikachu',
    'charizard',
    'squirtle',
    'jigglypuff',
    'eevee',
    'gengar',
    'mewtwo',
    'mew',
    'lugia',
    'gyarados',
  ]

  const handleNavigate = () => {
    if (id !== '') {
      navigate(`/pokemon/${id}`)
    } else {
      setMensaje('Debes seleccionar un pokémon')

      setTimeout(() => {
        setMensaje('')
      }, 3000)
    }
  }

  return (
    <>
      <Container className='mt-5'>
        <div className='d-flex align-items-center justify-content-center vh-100'>
          <div className='w-50 bg-white bg-opacity-50 rounded p-5'>
            <h1>Pokémones</h1>
            <select
              className='form-select'
              value={id}
              onChange={e => setId(e.target.value)}
            >
              <option value=''>--Selecciona un pokémon--</option>
              {opciones.map((opcion, index) => (
                <option
                  key={index}
                  value={opcion}
                >
                  {opcion}
                </option>
              ))}
            </select>
            <div className='d-flex justify-content-center'>
              <button
                className='btn-orange mt-3 mb-3 w-100'
                onClick={handleNavigate}
              >
                Buscar
              </button>
            </div>
            {mensaje && <Mensaje tipo='alert-danger'>{mensaje}</Mensaje>}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Pokemones
