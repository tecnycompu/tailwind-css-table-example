//mport { useRoutes } from 'react-router-dom';
import Developers from '../Developers';
/*import Home from '../Home';

import Tutorials from '../Tutorials';*/
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'

function App() {

  const settings = {
    dots:true,
    infinite: true,
    speed:200,   
    autoplaySpeed:20,
    autoplay: true,
    slideToShow: 3,
    slideToScroll: 1
  }

  return (
    <>
    <h1 className="bg-red-200 mb-4"> Helloo </h1>
    <button className="bg-sky-400 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={()=> window.open('https://tailwindcss.com/', '_blank')} > Help me</button>
    <div class="grid grid-cols-10 gap-5">
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
    <Developers />

    <div className='w-5/12 mx-auto my-auto'>
      <div className='mt-1.25'>
        <Slider {...settings}>
          {data.map((d) =>(
            <><div className='bg-white h-[200px] text-black rounded'>
              <img src={d.img} alt='' className='p-2 mt-8 h-44 w-44 rounded-full mx-auto my-auto' />
            </div><div className='flex flex-col items-center justify-center'>
                <p className='font-semibold'>{d.name}</p>
                <p className='text-center'>{d.review}</p>
                <button className='bg-violet-400 text-white text-lg px-2 py-1 rounded'>Go to Tutorials</button>
              </div></>          
          )
          ) 
          }
        </Slider>
      </div>
    </div>
    </>
  )
}

const data = [
  {
    name: `Diego De Granda`,
    img: `../src/assets/Photos/diego.jpg`,
    review:`Mexican developer`,
  },
  {
    name: `Brais Moure`,
    img: `../src/assets/Photos/brais.png`,
    review:`Spaniard developer`,
  },
  {
    name: `Miguel Ángel Durán`,
    img: `../src/assets/Photos/MADuran.png`,
    review:`Spaniard developer`,
  },
];

export default App
