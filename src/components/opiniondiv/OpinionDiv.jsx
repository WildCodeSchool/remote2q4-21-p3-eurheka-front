import React from 'react';
import Carousel from "react-elastic-carousel";
import './OpinionDiv.scss';
const OpinionDiv = (props) => {
    return (
        <div className='OpinionDiv'>
            <h2 className='OpinionTitle'>Vos avis comptent</h2>
            <Carousel itemsToShow={1}>
                <div>
                    <div className='OpinionCont'>
                        “ EURHEKA! m’a aidé à me recentrer, à m’orienter et à préparer ma reconversion. J’ai regardé les différentes vidéos explicatives sur les domaines d’activité, j’ai choisi le secteur dans lequel je voulais exercer et j’ai, par la suite, suivi les différents Web Atelier pour préparer mes entretiens. Je recommande fortement cette entreprise ! “
                    </div>
                    <div className='OpinionAutor'>
                        Auteur anonyme
                    </div>
                </div>
                <div>
                    <div className='OpinionCont'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ab quaerat earum molestiae minus recusandae dolores vero, magni et repudiandae pariatur aperiam quas consequuntur praesentium enim veritatis accusantium, omnis optio?
                    </div>
                    <div className="OpinionAutor">
                        Confusius
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default OpinionDiv
