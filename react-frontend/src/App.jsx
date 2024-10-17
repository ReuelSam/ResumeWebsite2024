import {BrowserRouter} from 'react-router-dom';
import MainRouter from './MainRouter';
import './css/App.css'

function App() {

  return (
    <BrowserRouter>
		  <MainRouter />
		</BrowserRouter>
  )
}

export default App
