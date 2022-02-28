import React from 'react'
import './ServiceCard.scss'

export const ServiceCard = (props) => {
    // const {containerFormat, setContainerFormat} = props

    return (
        <div className='ServiceCard'>
            <div className={props.containerClass}>
                <h2 className='serviceCardTitle'>{props.title}</h2>
                <h3 className='serviceCardSubTitle'>{props.subTitle}</h3>
                <ul className='serviceDescriptionListOn'>
                    {props.task1 ? <li>{props.task1}</li> : null }
                    {props.task2 ? <li>{props.task2}</li> : null }
                    {props.task3 ? <li>{props.task3}</li> : null }
                    {props.task4 ? <li>{props.task4}</li> : null }
                    {props.task5 ? <li>{props.task5}</li> : null }
                    {props.task6 ? <li>{props.task6}</li> : null }
                    {props.task7 ? <li>{props.task7}</li> : null }
                    {props.task8 ? <li>{props.task8}</li> : null }
                </ul>
                <button className='serviceDescriptionListOn'>bouton</button>
            </div>
        </div>
    )
}
