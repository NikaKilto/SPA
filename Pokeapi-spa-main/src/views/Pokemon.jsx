import { useParams, Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const Pokemon = () => {
  const [character, setCharacter] = useState([])
  /**
   * * se define el estado de abilites y types para no tener el error al momento del map
   */

  const [abilites, setAbilities] = useState([])
  const [types, setTypes] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getCharacter = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await response.json()

      // se hace el set de abilities y types con la data para que no de error al momento de hacer el map
      setAbilities(data.abilities)
      setTypes(data.types)

      const dataCharacter = {
        name: data.name,
        img: data.sprites.other.home.front_default,
        base_experience: data.base_experience,
        height: data.height,
        weight: data.weight,
      }
      setCharacter(dataCharacter)
      return dataCharacter
    }

    getCharacter()
  }, [id])

  return (
    <>
      <Container>
        <div className='d-flex justify-content-center align-items-center vh-100 position-relative'>
          <div className='grid-col-2 bg-white rounded p-5 w-75'>
            <div>
              <img
                alt='pokemon'
                src={character.img}
                style={{ width: '100%' }}
              />
            </div>
            <div className='bg-gris rounded p-5 shadow position-relative card-gris'>
              <h1 className='text-uppercase'>{character.name}</h1>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item bg-gris'>
                  Experiencia: {character.base_experience}
                </li>
                <li className='list-group-item bg-gris'>
                  Peso: {character.weight}
                </li>
                <li className='list-group-item bg-gris'>
                  Altura: {character.height}
                </li>
                <li className='list-group-item bg-gris'>Habilidades:</li>
                <ul>
                  {abilites.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                  ))}
                </ul>
                <li className='list-group-item bg-gris'>Tipos:</li>
                <ul>
                  {types.map((type, index) => (
                    <li key={index}>{type.type.name}</li>
                  ))}
                </ul>
              </ul>
              <div className='btn-volver'>
                <Link
                  to='/pokemones'
                  className='btn-volver'
                >
                  Volver
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Pokemon
