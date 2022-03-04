import React, { useState } from 'react'
import './ServiceCard.scss'

export const ServiceCard = (props) => {

    const [changeSize, setChangeSize] = useState(true)

    function changeButton() {
        setChangeSize(!changeSize);
    }

    return (
        <div className='ServiceCard'>
            <div className={changeSize ? props.containerClass : props.containerClassReduce}>
                <div className='serviceTitleContainer' onClick={changeButton}>
                    <h2 className='serviceCardTitle'>{props.title}</h2>
                    <span className='arrowStyle'>{changeSize ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>} </span>
                </div>
                <h3 className='serviceCardSubTitle'>{props.subTitle}</h3>
                <ul className='serviceDescriptionList'>
                    {props.task1 ? <li>{props.task1}</li> : null }
                    {props.task2 ? <li>{props.task2}</li> : null }
                    {props.task3 ? <li>{props.task3}</li> : null }
                    {props.task4 ? <li>{props.task4}</li> : null }
                    {props.task5 ? <li>{props.task5}</li> : null }
                    {props.task6 ? <li>{props.task6}</li> : null }
                    {props.task7 ? <li>{props.task7}</li> : null }
                    {props.task8 ? <li>{props.task8}</li> : null }
                </ul>
                <button className='serviceButton'>S'inscrire</button>
            </div>
            <div className={changeSize ? props.secondContainerClass : props.SecondContainerClassReduce}>
                <div className='serviceTitleContainer' onClick={changeButton}>
                    <h2 className='serviceCardTitle'>{props.titleb}</h2>
                    <span className='arrowStyle'>{changeSize ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-chevron-up"></i>} </span>
                </div>
                <h3 className='serviceCardSubTitle'>{props.subTitleb}</h3>
                <ul className='serviceDescriptionList'>
                    {props.task1b ? <li>{props.task1b}</li> : null }
                    {props.task2b ? <li>{props.task2b}</li> : null }
                    {props.task3b ? <li>{props.task3b}</li> : null }
                    {props.task4b ? <li>{props.task4b}</li> : null }
                    {props.task5b ? <li>{props.task5b}</li> : null }
                    {props.task6b ? <li>{props.task6b}</li> : null }
                    {props.task7b ? <li>{props.task7b}</li> : null }
                    {props.task8b ? <li>{props.task8b}</li> : null }
                </ul>
                <button className='serviceButton'>S'inscrire</button>
            </div>
        </div>
    )
}