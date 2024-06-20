import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Page1 from './components/Page1'
import Register from './components/Register'

function App() {

  return (
    <div className='app'>
    <Page1 />
    <About />
    <Gallery />
    <Register />
    <Footer />
    </div>
  )
}

export default App
