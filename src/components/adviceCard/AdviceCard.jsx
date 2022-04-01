import React from 'react';
import './AdviceCard.css';

const AdviceCard = (props) => {
    return (
        <div className='AdviceCard '>
            <a className='adviceCardLink' href={props.link}>
                <div className={props.className} >
                    <h3 className='h3-title'>{props.title}</h3>
                    <ul className='taskList'>
                        {props.task1 ? <li>{props.task1}</li> : null }
                        {props.task2 ? <li>{props.task2}</li> : null }
                        {props.task3 ? <li>{props.task3}</li> : null }
                        {props.task4 ? <li>{props.task4}</li> : null }
                    </ul>
                </div>
                </a>
        </div>
    )
}

export default AdviceCard