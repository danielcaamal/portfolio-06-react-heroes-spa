import { heroes } from "../data/heroes"
import { IHero } from "../interfaces/HeroInterface";

export const getHeroById = ( heroId: string = '' ) : IHero | null => {
    const hero = heroes.find( hero => hero.id === heroId );
    return hero ? hero : null;
}