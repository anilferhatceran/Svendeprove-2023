import React,{useState} from 'react'
import dummyData from '../dummyData'
import {FaArrowCircleRight,FaArrowCircleLeft} from 'react-icons/fa'

const ImageCarousel = ({slides}) => {
    const[current,setCurrent] = useState(0)
    const length = slides.length

    if(!Array.isArray(slides)  || slides.length <= 0){
        return null
    }

    
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    return(
    <section className='relative h-[100vh] flex justify-center  '>
        <FaArrowCircleLeft className='absolute top-1/2 left-8 text-5xl text-white z-10 cursor-pointer select-none' onClick={prevSlide}/>
        <FaArrowCircleRight className='absolute top-1/2 right-8 text-5xl text-white z-10 cursor-pointer select-none' onClick={nextSlide}/>
        {dummyData.map((slide,index) =>{
        return(
            <div className={index === current ? 'opacity-100 transition duration-100 scale-100' : 'opacity-0 transition duration-100 ease-out'} key={index}>
                {index === current && (<img src={slide.image} className="w-[1000px] h-[600px]"/>)}
            </div>
            )
        })}
    </section>
  ) 
}

export default ImageCarousel