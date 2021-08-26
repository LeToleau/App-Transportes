import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
  return (
    <main className='holder'>
      <div className='homeimg'>
        <img src='../../images/home/img01.jpg' alt='avion' />
      </div>
      <div className='columnas'>
        <div className='bienvenidos left'>
          <h2>Bienvenidos</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='testimonios right'>
          <h2>Testimonios</h2>
          <div className='testimonio'>
            <span className='testimonio'>Simplemente excelente.</span>
            <span className='autor'>Juan Perez</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage
