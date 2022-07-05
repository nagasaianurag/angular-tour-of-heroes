import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from './heros';
import { HEROES } from '../mock-heroes';
import { HeroesService } from '../hero.services'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // hero: Hero= {id:1, name: 'Windstrom'};
  heroes = Hero[]= [];
  selectedHero?: Hero;
  onselect(hero:Hero){
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
  
  constructor(private heroService: HeroesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

}

getHeroes(): void{
  this.heroes = this.heroService.getHeroes();
}




