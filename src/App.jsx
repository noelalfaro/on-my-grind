import BaristaForm from './Components/baristaForm';
import './App.css'
import './index.css'
import coffeeBagImg from './assets/coffeeBag.png'

function App() {

  return (
    <>
      <div className="hero">
        <div className='imageContainer'>
          <img src={coffeeBagImg} alt="coffeeBag.png" />
        </div>
        <div className='titleContainer'>
          <h1 className="title">On My Grind</h1>
        </div>
      </div>

      <p className='hookText'>So you think you can barista? Let's put that to the test...</p>

      <BaristaForm />
    </>
  )
}

export default App
