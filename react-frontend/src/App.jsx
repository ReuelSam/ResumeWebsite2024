import {BrowserRouter} from 'react-router-dom';
import MainRouter from './MainRouter';
import './css/App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
		  <MainRouter />
		</BrowserRouter>
  )
}

export default App
