import { Component, OnInit } from '@angular/core';
import {Hero} from '../shared/model/hero.model';
import {HeroService} from '../shared/service/hero.service';
import {Router} from '@angular/router';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router, // router 컴포넌트를 주입받음
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
