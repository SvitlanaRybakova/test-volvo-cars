import React, {useState} from "react"
import "./CardSlider.css"
import cars from "../../api/cars.json"
import chevronCircledLeft from "../../logo/chevronCircledLeft.svg"
import chevronCircledRight from "../../logo/chevronCircledRight.svg"
import chevronSmall from "../../logo/chevronSmall.svg"
import Button from "react-bootstrap/Button"

const CardSlider = () => {
    const [filtred, setFiltred] = useState(cars)

    const MOBILE_SCROLL_SIZE = 290,
          DESCTOP_SCROLL_SIZE = 1255

    const scrollSize = window.matchMedia('screen and (max-width: 480px)').matches ? MOBILE_SCROLL_SIZE : DESCTOP_SCROLL_SIZE

    const carsFilter = (bodyType) => {
        bodyType === 'all' ? setFiltred(cars) : setFiltred([...cars].filter(item => item.bodyType === bodyType))
    }

    const slideLeft = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + scrollSize
    }

    const slideRight = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - scrollSize
    }

    return (
            <div id='main-slider-container'>
                <div>
                    <Button variant='secondary' size='sm' onClick={() => {carsFilter('all')}}>
                        All
                    </Button>{' '}
                    <Button variant='secondary' size='sm' onClick={() => {carsFilter('sedan')}}>
                        Sedan
                    </Button>{' '}
                    <Button variant='secondary' size='sm' onClick={() => {carsFilter('estate')}}>
                        Estate
                    </Button>{' '}
                    <Button variant='secondary' size='sm' onClick={() => {carsFilter('suv')}}>
                        SUV
                    </Button>
                </div>
                <div id='slider'>
                    {filtred && filtred.map((car, id) => {
                         return (
                            <div className='slider-card' key={id}>
                                <div className='slider-card-text-wrapper'>
                                    <h3 className='body-type'>{car.bodyType}</h3>
                                    <div className='car-name-wrapper'>
                                        <p className='model-name'>{car.modelName}</p>
                                        <p className='model-type'>{car.modelType}</p>
                                    </div>
                                </div>
                                <img className='slider-card-image' 
                                    src={car.imageUrl} 
                                    alt={car.modelName}
                                    style={{backgroundImage:`url(${car.imageUrl})`, backgroundSize:'cover'}}>
                                </img>
                                <div className='slider-card-link-wrapper'>
                                    <div className='single-link-wrapper'>
                                        <a href={'/learn/' + car.id} aria-label='Learn'>
                                            Learn
                                            <img src={chevronSmall} alt='Learn' />
                                        </a>
                                    </div>
                                    <div className='single-link-wrapper'>
                                        <a href={'/shop/' + car.id} aria-label='Shop' >
                                            Shop
                                            <img src={chevronSmall} alt='Shop' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='slider-chevrons'>
                    <img src={chevronCircledRight} onClick={slideRight} alt='Right icon' />
                    <img src={chevronCircledLeft} onClick={slideLeft} alt='Left icon' />
                </div>
            </div>
    )
}

export default CardSlider;