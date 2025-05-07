//** import third party component */
import Navbar from '../src/component/navigation/navbar'
//** css and desing */
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
    </BrowserRouter>
  )
}

export default App
