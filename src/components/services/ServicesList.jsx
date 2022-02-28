import React, { useState } from 'react';
import { ServiceCard } from './ServiceCard';
import ServiceCardRedux from './ServiceCardRedux';
import themeServices from '../../assets/data/themeServices';
import './ServicesList.scss';

const ServicesList = () => {
    // const [containerFormat, setContainerFormat] = useState(false)

    return (
        <div className='ServicesList'>
            {themeServices.map((data) => (
                <ServiceCard containerClass={(data.id % 2 ===0) ? 'lightContainer' : 'darkContainer'}
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
                />
            ))

            }
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