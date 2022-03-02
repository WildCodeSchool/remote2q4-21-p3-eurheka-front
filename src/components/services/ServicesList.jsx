import React, { useState } from 'react';
import { ServiceCard } from './ServiceCard';
import themeServices from '../../assets/data/themeServices';
import './ServicesList.scss';

const ServicesList = () => {
    // const [containerFormat, setContainerFormat] = useState(false)
    // const [changeSize, setChangeSize] = useState(true)

    // function changeButton() {
    //     setChangeSize(!changeSize);
    // }




    return (
        <div className='ServicesList'>
            <ServiceCard 
                    containerClass={'firstCard'}
                    containerClassReduce={'firstCardReduce'}
                    secondContainerClass={'secondCard'}
                    SecondContainerClassReduce={'secondCardReduce'}
                    key={themeServices[0].id}
                    title={themeServices[0].title}
                    subTitle={themeServices[0].subTitle}
                    task1={themeServices[0].task1}
                    task2={themeServices[0].task2}
                    task3={themeServices[0].task3}
                    task4={themeServices[0].task4}
                    task5={themeServices[0].task5}
                    task6={themeServices[0].task6}
                    task7={themeServices[0].task7}
                    task8={themeServices[0].task8}
                    keyb={themeServices[1].id}
                    titleb={themeServices[1].title}
                    subTitleb={themeServices[1].subTitle}
                    task1b={themeServices[1].task1}
                    task2b={themeServices[1].task2}
                    task3b={themeServices[1].task3}
                    task4b={themeServices[1].task4}
                    task5b={themeServices[1].task5}
                    task6b={themeServices[1].task6}
                    task7b={themeServices[1].task7}
                    task8b={themeServices[1].task8}
                />
            <ServiceCard 
                    containerClass={'firstCardReduce'}
                    containerClassReduce={'firstCard'}
                    secondContainerClass={'secondCardReduce'}
                    SecondContainerClassReduce={'secondCard'}
                    key={themeServices[2].id}
                    title={themeServices[2].title}
                    subTitle={themeServices[2].subTitle}
                    task1={themeServices[2].task1}
                    task2={themeServices[2].task2}
                    task3={themeServices[2].task3}
                    task4={themeServices[2].task4}
                    task5={themeServices[2].task5}
                    task6={themeServices[2].task6}
                    task7={themeServices[2].task7}
                    task8={themeServices[2].task8}
                    keyb={themeServices[3].id}
                    titleb={themeServices[3].title}
                    subTitleb={themeServices[3].subTitle}
                    task1b={themeServices[3].task1}
                    task2b={themeServices[3].task2}
                    task3b={themeServices[3].task3}
                    task4b={themeServices[3].task4}
                    task5b={themeServices[3].task5}
                    task6b={themeServices[3].task6}
                    task7b={themeServices[3].task7}
                    task8b={themeServices[3].task8}
                />
            <ServiceCard 
                containerClass={'firstCard'}
                containerClassReduce={'firstCardReduce'}
                secondContainerClass={'secondCard'}
                SecondContainerClassReduce={'secondCardReduce'}
                    key={themeServices[4].id}
                    title={themeServices[4].title}
                    subTitle={themeServices[4].subTitle}
                    task1={themeServices[4].task1}
                    task2={themeServices[4].task2}
                    task3={themeServices[4].task3}
                    task4={themeServices[4].task4}
                    task5={themeServices[4].task5}
                    task6={themeServices[4].task6}
                    task7={themeServices[4].task7}
                    task8={themeServices[4].task8}
                    keyb={themeServices[5].id}
                    titleb={themeServices[5].title}
                    subTitleb={themeServices[5].subTitle}
                    task1b={themeServices[5].task1}
                    task2b={themeServices[5].task2}
                    task3b={themeServices[5].task3}
                    task4b={themeServices[5].task4}
                    task5b={themeServices[5].task5}
                    task6b={themeServices[5].task6}
                    task7b={themeServices[5].task7}
                    task8b={themeServices[5].task8}
                />
        </div>
    )
}

export default ServicesList