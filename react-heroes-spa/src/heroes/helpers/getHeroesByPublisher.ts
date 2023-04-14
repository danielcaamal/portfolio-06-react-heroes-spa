import { heroes } from "../data/heroes"
import { IHero } from "../interfaces/HeroInterface";

export const getHeroesByPublisher = ( publisher: string = 'Marvel Comics' ): IHero[] => {
    const validatePublishers = ['DC Comics', 'Marvel Comics'];

    if ( !validatePublishers.includes( publisher ) ) {
        throw new Error(`Publisher "${ publisher }" no es correcto`);
    }

    return heroes.filter( hero => hero.publisher === publisher ).sort( (a, b) => (a.superhero > b.superhero) ? 1 : -1 );
}