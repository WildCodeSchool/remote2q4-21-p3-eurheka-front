import React from 'react';
import AdviceCard from '../adviceCard/AdviceCard';
import adviceCards from '../../assets/data/adviceCards';
import './AdviceCardList.css';

const AdviceCardList = () => {
    return (
        <div>
            <div className="AdviceCardList-container">
                {adviceCards.map((data) => (
                    <AdviceCard className={(data.id % 2 ===0) ? 'background-even-container' : 'background-odd-container'}
                        key={data.id}
                        title={data.title}
                        task1={data.task1}
                        task2={data.task2}
                        task3={data.task3}
                        task4={data.task4}
                        task5={data.task5}
                    />
                ))
                }
            </div>
        </div>
    )
}

export default AdviceCardList
