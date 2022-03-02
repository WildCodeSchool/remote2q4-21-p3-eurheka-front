import React from 'react'
import './ServiceCard.scss'

export const ServiceCard = (props) => {
    // const {containerFormat, setContainerFormat} = props
    const {changeSize, setChangeSize} = props
    const {changeSize2, setChangeSize2} = props
    const {changeSize3, setChangeSize3} = props

    function changeButton1() {
        setChangeSize(!changeSize);
    }

    function changeButton2() {
        setChangeSize2(!changeSize2);
    }

    function changeButton3() {
        setChangeSize3(!changeSize3);
    }
    
    return (
        // <div className='ServiceCard'>
        <div className={props.gridContainer}>
            <div className={props.containerClass}>
                <div className='serviceTitleContainer' onClick={changeButton1}>
                    <h2 className='serviceCardTitle'>{props.title}</h2>
                    <span className='arrowStyle'><i className="fa-solid fa-chevron-down"></i></span>
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
                {/* <button className='serviceDescriptionListOn' onClick={changeButton}>bouton</button> */}
            </div>
        </div>
    )
}
