import React from 'react'
import { ServiceCard } from './ServiceCard'
import ServiceCardRedux from './ServiceCardRedux'
import './ServicesList.scss'

const ServicesList = () => {
    return (
        <div className='ServicesList'>
            <div className='columnList'>
                <ServiceCard />
                <ServiceCardRedux />
            </div>
            <div className='columnList'>
                <ServiceCardRedux />
                <ServiceCard />
            </div>
            <div className='columnList'>
                <ServiceCard />
                <ServiceCardRedux />
            </div>
        </div>
    )
}

export default ServicesList