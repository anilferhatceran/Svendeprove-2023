import React,{useState} from 'react'

export default function ImageCarousel(props) {
    const [carouselImage,setCarouselImage] = useState(1)
    console.log(props.id.length)

    function NextImage(){
        setCarouselImage(carouselImage + 1)
    }
    function PrevImage(){
        setCarouselImage(carouselImage - 1)
    }
    return (
        // <div>{props.image}</div>
        // <img src={`${props.image}`}/>
    <div>
        <div>{props.id === carouselImage ? <img src={props.image}/> : ""}</div>
        <button onClick={PrevImage} className="bg-red-600">prev image</button>
        <button onClick={NextImage} className="bg-blue-600">next image</button>
    </div>
    )
}
