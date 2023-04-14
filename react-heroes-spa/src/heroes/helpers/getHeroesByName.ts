import { heroes } from "../data/heroes"
import { IHero } from "../interfaces/HeroInterface";

export const getHeroesByName = ( name: string = '' ): IHero[] => {
    name = name.toLowerCase();
    return heroes.filter( hero => hero.superhero.toLowerCase().includes(name)).sort( (a, b) => (a.superhero > b.superhero) ? 1 : -1 );
}