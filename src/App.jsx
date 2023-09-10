import './App.css'
import GenreMovieList from './components/GenreMovieList'
import Header from './components/Header'
import ProductionHouse from './components/ProductionHouse'
import Slider from './components/Slider'

function App() {

  return (
    <div className=''>
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GenreMovieList/>
    </div>
  )
}

export default App
