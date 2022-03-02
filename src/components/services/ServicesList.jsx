import React, { useState } from 'react';
import { ServiceCard } from './ServiceCard';
import themeServices from '../../assets/data/themeServices';
import './ServicesList.scss';

const ServicesList = () => {
    // const [containerFormat, setContainerFormat] = useState(false)
    const [changeSize, setChangeSize] = useState(true)

    // function changeButton() {
    //     setChangeSize(!changeSize);
    // }




    return (
        <div className='ServicesList'>
            {themeServices.map((data) => (
                <ServiceCard 
                    gridContainer={changeSize ? `test${data.id}` : `test${data.id}bis`}
                    containerClass={(data.id === 1 || data.id === 4 || data.id === 5) ? 'lightContainer' : 'darkContainer'}
                    key={data.id}
                    title={data.title}
                    subTitle={data.subTitle}
                    task1={data.task1}
                    task2={data.task2}
                    task3={data.task3}
                    task4={data.task4}
                    task5={data.task5}
                    task6={data.task6}
                    task7={data.task7}
                    task8={data.task8}
                    changeSize={changeSize}
                    setChangeSize={setChangeSize}
                />
            ))
            } 
{/* 
            <ServiceCard 
                gridContainer={changeSize ? `test${themeServices[0].id}` : `test${themeServices[0].id}bis`}
                containerClass={(themeServices[0].id === 1 || themeServices[0].id === 4 || themeServices[0].id === 5) ? 'lightContainer' : 'darkContainer'}
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
                    changeSize={changeSize}
                    setChangeSize={setChangeSize}
                />
            
            <ServiceCard 
                gridContainer={changeSize ? `test${themeServices[1].id}` : `test${themeServices[1].id}bis`}
                containerClass={(themeServices[1].id === 1 || themeServices[1].id === 4 || themeServices[1].id === 5) ? 'lightContainer' : 'darkContainer'}
                    key={themeServices[1].id}
                    title={themeServices[1].title}
                    subTitle={themeServices[1].subTitle}
                    task1={themeServices[1].task1}
                    task2={themeServices[1].task2}
                    task3={themeServices[1].task3}
                    task4={themeServices[1].task4}
                    task5={themeServices[1].task5}
                    task6={themeServices[1].task6}
                    task7={themeServices[1].task7}
                    task8={themeServices[1].task8}
                    changeSize={changeSize}
                    setChangeSize={setChangeSize}
                />
            <ServiceCard 
                gridContainer={changeSize2 ? `test${themeServices[2].id}` : `test${themeServices[2].id}bis`}
                containerClass={(themeServices[2].id === 1 || themeServices[2].id === 4 || themeServices[2].id === 5) ? 'lightContainer' : 'darkContainer'}
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
                />
            <ServiceCard 
                gridContainer={changeSize2 ? `test${themeServices[3].id}` : `test${themeServices[3].id}bis`}
                containerClass={(themeServices[3].id === 1 || themeServices[3].id === 4 || themeServices[3].id === 5) ? 'lightContainer' : 'darkContainer'}
                    key={themeServices[3].id}
                    title={themeServices[3].title}
                    subTitle={themeServices[3].subTitle}
                    task1={themeServices[3].task1}
                    task2={themeServices[3].task2}
                    task3={themeServices[3].task3}
                    task4={themeServices[3].task4}
                    task5={themeServices[3].task5}
                    task6={themeServices[3].task6}
                    task7={themeServices[3].task7}
                    task8={themeServices[3].task8}
                />
            <ServiceCard 
                gridContainer={changeSize3 ? `test${themeServices[4].id}` : `test${themeServices[4].id}bis`}
                containerClass={(themeServices[4].id === 1 || themeServices[4].id === 4 || themeServices[4].id === 5) ? 'lightContainer' : 'darkContainer'}
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
                />
            <ServiceCard 
                gridContainer={changeSize3 ? `test${themeServices[5].id}` : `test${themeServices[5].id}bis`}
                containerClass={(themeServices[5].id === 1 || themeServices[5].id === 4 || themeServices[5].id === 5) ? 'lightContainer' : 'darkContainer'}
                    key={themeServices[5].id}
                    title={themeServices[5].title}
                    subTitle={themeServices[5].subTitle}
                    task1={themeServices[5].task1}
                    task2={themeServices[5].task2}
                    task3={themeServices[5].task3}
                    task4={themeServices[5].task4}
                    task5={themeServices[5].task5}
                    task6={themeServices[5].task6}
                    task7={themeServices[5].task7}
                    task8={themeServices[5].task8}
                />
            <button onClick={changeButton}>bouton col1</button>
            <button onClick={changeButton2}>bouton col2</button>
            <button onClick={changeButton3}>bouton col3</button> */}

            {/* <div className='columnList'>
                <ServiceCard containerFormat={containerFormat} setContainerFormat={setContainerFormat}/>
                <ServiceCardRedux />
            </div>
            <div className='columnList'>
                <ServiceCardRedux />
                <ServiceCard />
            </div>
            <div className='columnList'>
                <ServiceCard />
                <ServiceCardRedux />
            </div> */}
        </div>
    )
}

export default ServicesList