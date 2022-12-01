import React,{useState} from 'react'
import dummyData from '../dummyData'
import {FaArrowCircleRight,FaArrowCircleLeft} from 'react-icons/fa'
import { useSpring, animated, to } from "react-spring";

const ImageCarousel = ({slides}) => {
    const[current,setCurrent] = useState(0)
    const[prev, setPrev] = useState(slides.length-1)
    const length = slides.length

    if(!Array.isArray(slides)  || slides.length <= 0){
        return null
    }
    console.log("current: " +current);
    console.log("prev: " +prev);
    const [springs, api] = useSpring(() => ({
        from: { x: 0 },
      }))
    
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
        setPrev(prev === length - 1 ? 0 : prev  + 1)
        api.start({
            from: {
              x: 1500,
            },
            to: {
              x: 0,
            },
          })
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
        setPrev(prev === 0 ? length - 1 : prev - 1)
        api.start({
            from: {
              x: -1500,
            },
            to: {
              x: 0,
            },
          })
    }
    return(
    <section className='relative   flex justify-center '>
        <div className='w-[1000px] h-[600px] relative overflow-hidden'>
        <FaArrowCircleLeft className=' absolute top-1/2 left-8 text-5xl text-white z-50 cursor-pointer select-none' onClick={prevSlide}/>
        <FaArrowCircleRight className='absolute top-1/2 right-8 text-5xl text-white z-50 cursor-pointer select-none' onClick={nextSlide}/>
            {dummyData.map((slide,index) =>{
            return(
                <div className='' key={index}>
                    <animated.div
                    style={{
                        width: 1000,
                        ...springs,
                    }}
                    >
                        <div className={'z-20 absolute'} >
                            {index === current && (<img src={slide.image} className="w-[1000px] h-[600px]"/>)}
                        </div>
                    </animated.div>
                    
                    <animated.div
                    style={{
                        width: 1000,
                        ...springs,
                    }}
                    >
                        <div className={'z-10 absolute'} >
                            {index === prev && (<img src={slide.image} className="w-[1000px] h-[600px]"/>)}
                        </div>
                    </animated.div>
                </div>
                )
            })}
        </div>
    </section>
  ) 
}

export default ImageCarousel