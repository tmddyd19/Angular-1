import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Hero} from '../shared/model/hero.model';
import {HeroService} from '../shared/service/hero.service';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      (p) => this.hero = this.heroService.getHero(+p['id']));
  }

  goBack(): void {
    this.location.back();
  }
}
