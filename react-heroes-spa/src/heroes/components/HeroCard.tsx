import { IHero } from "../interfaces/HeroInterface"
import { Link } from 'react-router-dom';


export const HeroCard = ({ hero }: { hero: IHero }) => {

    const imageUrl = `./assets/${hero.id}.jpg`;
    const lastUpdated = Math.floor(Math.random() * 60) + 1;
    const heroUrl = `/hero/${hero.id}`;

    return (
        <>
            <div className="card ms-3 p-1" style={{ maxWidth: 540 }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={imageUrl} className="card-img" alt={hero.superhero} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{hero.superhero}</h5>
                            <p className="card-text">{hero.alter_ego}</p>
                            <p className="card-subtitle mb-2 text-muted">First Appearance: {hero.first_appearance}</p>
                            <p className="card-text">Characters: {hero.characters}</p>
                            <p className="card-text"><small className="text-muted">Last updated {lastUpdated} mins ago</small></p>
                            <Link to={heroUrl} className="card-text">
                                <p className="card-text">More...</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}