import disney from '../assets/Images/disney.png'
import marvel from '../assets/Images/marvel.png'
import nationalGeo from '../assets/Images/nationalG.png'
import pixar from '../assets/Images/pixar.png'
import starwar from '../assets/Images/starwar.png'

import disneyV from '../assets/Videos/disney.mp4'
import marvelV from '../assets/Videos/marvel.mp4'
import nationalGeoV from '../assets/Videos/national-geographic.mp4'
import pixarV from '../assets/Videos/pixar.mp4'
import starwarV from '../assets/Videos/star-wars.mp4'



const ProductionHouse = () => {
    const productionHouseList = [
        {id:1, image:disney, video:disneyV},
        {id:2, image:marvel, video:marvelV},
        {id:3, image:nationalGeo, video:nationalGeoV},
        {id:4, image:pixar, video:pixarV},
        {id:5, image:starwar, video:starwarV}
    ]

  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
        {productionHouseList.map((item, i)=>(
            <div key={i} className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800'>
                <video src={item.video} autoPlay loop playsInline muted className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50'/>
                <img src={item.image} className='w-full z-[1]' />
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse