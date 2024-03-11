import './App.css'
import Footer from './components/Footer/Footer'
import Header from "./components/Header/Header"
import Shop from './pages/Shop/Shop'

const App = () => {
  return (
    <div className='wrapper'>
        <Header />
        <Shop />
        <Footer />
    </div>
  ) 
}

export default App