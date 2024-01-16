import { Navbar, Container } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import iconEevee from '../assets/img/iconEevee.png'
import iconJigglypuff from '../assets/img/iconJigglypuff.png'
import iconPikachu from '../assets/img/iconPikachu.png'
import iconPokebola from '../assets/img/iconPokebola.png'

const Nvbar = () => {
  const navigate = useNavigate()
  const setActiveClass = ({ isActive }) => {
    return isActive ? 'active' : undefined
  }

  const handleGoHome = () => {
    navigate('/')
  }

  const handleGoPokemon = id => {
    navigate(`/pokemon/${id}`)
  }

  return (
    <>
      <Navbar
        bg='transparent'
        variant='dark'
        fixed='top'
      >
        <Container className='justify-content-between'>
          <Navbar.Brand>
            <div className='nav-icons-imgs'>
              <img
                src={iconEevee}
                alt='Eevee'
                className='icon-live'
                onClick={() => handleGoPokemon('eevee')}
              />
              <img
                src={iconJigglypuff}
                alt='Jigglypuff'
                className='icon-live'
                onClick={() => handleGoPokemon('jigglypuff')}
              />
              <img
                src={iconPikachu}
                alt='Pikachu'
                className='icon-live'
                onClick={() => handleGoPokemon('pikachu')}
              />
              <img
                src={iconPokebola}
                alt='iconPokebola'
                className='icon-live'
                onClick={handleGoHome}
              />
            </div>
          </Navbar.Brand>
          <div>
            <NavLink
              to='/'
              className={`${setActiveClass} ms-3`}
            >
              Inicio
            </NavLink>
            <NavLink
              to='/pokemones'
              className={`${setActiveClass} ms-3`}
            >
              Pokémones
            </NavLink>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Nvbar
