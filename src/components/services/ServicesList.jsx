import React, { useState } from 'react';
import { ServiceCard } from './ServiceCard';
import themeServices from '../../assets/data/themeServices';
import './ServicesList.scss';

const ServicesList = () => {
    console.log(themeServices[0+1].id)
    const cardRender = [];
    for (let i = 0; i < themeServices.length; i++) {
        cardRender.push(
            <ServiceCard 
                    containerClass={i === 0 || i === 4 ? 'firstCard' : 'secondCardReduce'}
                    containerClassReduce={i === 0 || i === 4 ? 'firstCardReduce' : 'firstCard'}
                    secondContainerClass={i === 0 || i === 4 ? 'secondCard' : 'firstCardReduce'}
                    SecondContainerClassReduce={i === 0 || i === 4 ? 'secondCardReduce' : 'secondCard'}
                    key={themeServices[i].id}
                    title={themeServices[i].title}
                    subTitle={themeServices[i].subTitle}
                    task1={themeServices[i].task1}
                    task2={themeServices[i].task2}
                    task3={themeServices[i].task3}
                    task4={themeServices[i].task4}
                    task5={themeServices[i].task5}
                    task6={themeServices[i].task6}
                    task7={themeServices[i].task7}
                    task8={themeServices[i].task8}
                    keyb={themeServices[i+1].id}
                    titleb={themeServices[i+1].title}
                    subTitleb={themeServices[i+1].subTitle}
                    task1b={themeServices[i+1].task1}
                    task2b={themeServices[i+1].task2}
                    task3b={themeServices[i+1].task3}
                    task4b={themeServices[i+1].task4}
                    task5b={themeServices[i+1].task5}
                    task6b={themeServices[i+1].task6}
                    task7b={themeServices[i+1].task7}
                    task8b={themeServices[i+1].task8}
                />)
            i = i +1
            
        }
    

    return (
        <div className='ServicesList'>
            {cardRender}
        </div>
    )
}

export default ServicesList