//** import third party component */
import Navbar from './component/navigation'
import Home from './component/homePage/index'
//** css and desing */
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </BrowserRouter>
  )
}

export default App
