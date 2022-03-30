import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './CandidateOpinon.scss'

const CandidateOpinon = ({user, uId}) => {
    const [userId, setUserId] = useState('');
    const [firstname, setFirstname] = useState('');
    const [description, setDescription] = useState('');
    const [display, setDisplay] = useState(true);

    const viewOpinion = () =>  {
        setDisplay(!display)
    }

    useEffect (() => {
        if (user) {
        setFirstname(user.firstname);
        setUserId(uId)
        }
    }, [user])

    const submitOpinion = (e) => {
        e.preventDefault();
        if(description===''){
            alert('Veuillez remplir le champs de description');
            return -1;
        }
        const newOpinion = {
            opinion: description,
            author: firstname,
            user: userId
        }
        const url = `${process.env.REACT_APP_API_URL}opinion/`;
            axios.post(url, newOpinion, { withCredentials: true })
            .then(function (response){
                if (response.status === 201) {
                    alert("Votre avis a bien été envoyé")
                    setDescription("");
                    setDisplay(!display)
                }
            })
        .catch((err) => {
            console.log(err)
        }) 
    }

    return (
        <div className='CandidateOpinon'>
            <div className='titleOpinion'>Donnez votre avis sur Eurhéka</div>
            <button className={ display ? 'displayButton' : 'displayButtonNone'} onClick={viewOpinion}>Déposer un avis</button>
            <form onSubmit={submitOpinion} className={ display ? 'descriptionOpinionNone' : 'descriptionOpinion'}>
                <label htmlFor="description " 
                className='descriptionTitle'></label>
                <textarea 
                    type="text" 
                    id="description" 
                    name="description" 
                    value={description}
                    className='descriptionContainer'
                    onFocus={(e) => e.target.placeholder = ""}  
                    onChange={(e) => setDescription(e.target.value)}
                    maxlength="500"
                />
                <button 
                type="submit"
                className='validateOpinion'>Envoyer mon avis</button>
            </form>
        </div>
    )
}

export default CandidateOpinon