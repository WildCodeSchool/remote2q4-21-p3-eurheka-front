import React, { useEffect, useState } from 'react';
import Carousel from "react-elastic-carousel";
import axios from 'axios';
import './OpinionDiv.scss';
const OpinionDiv = (props) => {
    const [opinions, setOpinions] = useState([]);
    const url=`${process.env.REACT_APP_API_URL}`;
    useEffect(() => {
        axios
            .get(url + 'opinion/eurheka/')
            .then((res) => res.data)
            .then((data) => setOpinions(data))
    }, [])
    return (
        <div className='OpinionDiv'>
            <h2 className='OpinionTitle'>Vos avis comptent</h2>
            <Carousel itemsToShow={1}>
                {opinions && opinions.map((opinion,index) => {
                    return (
                        <div>
                            <div className='OpinionCont' key={index}>
                                "{opinion.opinion}"
                            </div>
                            <div className='OpinionAutor'>
                                {opinion.author}
                            </div>
                        </div>)
                })}
            </Carousel>
        </div>
    )
}

export default OpinionDiv
