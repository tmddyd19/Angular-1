
import {Injectable} from '@angular/core';
import {Hero} from '../model/hero.model';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Injectable()

export class HeroService {
  // hero 데이터를 받아온다.
  getHeroes(): Hero[] {
    return HEROES;
  }
  // 아이디를 파라미터로 히어로 객체를 반환
  getHero(id: number): Hero {
    console.log('in the getHero');
    console.log('id', id);
    return HEROES.find((hero) => hero.id === id);
  }
}
