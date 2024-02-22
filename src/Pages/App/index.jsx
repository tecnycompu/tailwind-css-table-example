import { useRoutes} from 'react-router-dom';
import Home from '../Home';
import Developers from '../Developers';
import Tutoriales from '../Tutorials';

import './App.css'

function App() {

  return (
    <>
    <h1 className="bg-red-200" > Hola clase </h1>
    <button className="bg-sky-400 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded" onClick={()=> window.open('https://tailwindcss.com/', '_blank')} > Help me</button>
 
<div class="grid grid-cols-10 gap-2">
  <div class="bg-violet-50 aspect-square"></div>
  <div class="bg-violet-100 aspect-square"></div>
  <div class="bg-violet-200 aspect-square"></div>
  <div class="bg-violet-300 aspect-square"></div>
  <div class="bg-violet-400 aspect-square"></div>
  <div class="bg-violet-500 aspect-square"></div>
  <div class="bg-violet-600 aspect-square"></div>
  <div class="bg-violet-700 aspect-square"></div>
  <div class="bg-violet-800 aspect-square"></div>
  <div class="bg-violet-900 aspect-square"></div>
</div>

<Table />



    </>
  )
}

export default App
