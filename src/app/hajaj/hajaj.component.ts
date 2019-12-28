import { Component, OnInit } from '@angular/core';
import { Hero, Hajaj } from '../hero';
import { HajajService } from '../hajaj.service';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-hajaj',
  templateUrl: './hajaj.component.html',
  styleUrls: ['./hajaj.component.css']
})
export class HajajComponent implements OnInit {
  heroes : Hero[];
  hj:Hajaj;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  }
 
  constructor(private heroService: HajajService) 
  { 
    console.log('inside constructor');
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit()
  {
    this.getHeroes();
    console.log('inside onInit');
    
    
    this.hj= new Hajaj(); 
    this.hj = 
    {
      age: 22,
      name: 'Hajaj Khan'
    };
  }

}
