import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HeroService } from "../../services/hero.service";
import { Hero } from "../../models/hero";

@Component({
    moduleId: module.id + '',
    selector: 'my-heroes',
    templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

    heroes: Hero[];

    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService,
    ) { }

    ngOnInit() { 
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    private async getHeroes() {
        this.heroes = await this.heroService.getHeroes();
    }
}