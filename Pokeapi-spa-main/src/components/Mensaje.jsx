import iconPikachu from '../assets/img/iconPikachu.png'

const Mensaje = ({ children, tipo }) => {
  return (
    <div className={`alert ${tipo}`}>
      <img
        src={iconPikachu}
        alt='iconPikachu'
        className='iconPikachu'
      />
      {children}
    </div>
  )
}

export default Mensaje
