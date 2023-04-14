import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from "../helpers";
import { useMemo } from 'react';

export const HeroPage = () => {
    const { heroId } = useParams<any>();
    const navigate = useNavigate();

    const hero = useMemo(() => getHeroById(heroId), [heroId]);
    
    if (!hero) {
        return <Navigate to="/marvel" />
    }
    const imageUrl = `/assets/${hero.id}.jpg`;

    const handleReturn = () => {
        if (hero.publisher === 'Marvel Comics') {
            navigate('/marvel');
        } else {
            navigate('/dc');
        }
    }

    return (
        <div className='pt-5'>
            <div className='card d-flex align-items-center'>
                <div className='row no-gutters'>
                    <div className='col-md-4'>
                        <img src={imageUrl} className='img-thumbnail animate__animated animate__zoomIn' alt={hero.superhero} />
                    </div>
                    <div className='col-md-8 d-flex align-items-center'>
                        <div className='card-body'>
                            <h5 className='card-title'>{hero.superhero}</h5>
                            <p className='card-text'>{hero.alter_ego}</p>
                            <p className='card-subtitle mb-2 text-muted'>First Appearance: {hero.first_appearance}</p>
                            <p className='card-text'>Characters: {hero.characters}</p>
                            <p className='card-text'>{hero.description}</p>
                            <div className='d-flex justify-content-end'>
                                <button 
                                    id='hero-page-button'
                                    type='button'
                                    className='btn btn-outline-info mr-3'
                                    onClick={handleReturn}
                                    >Return
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}