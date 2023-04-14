import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";
import { useMemo } from 'react';


export const HeroList = ({ publisher }: { publisher: string }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row row-cols-md-2 d-flex justify-content-center animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        hero={hero}
                    />
                ))
            }
        </div>
    )
}