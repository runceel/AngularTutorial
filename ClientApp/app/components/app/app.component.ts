import { Component, OnInit } from '@angular/core';
import { Hero } from "../../models/hero";
import { HeroService } from "../../services/hero.service";


@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HeroService],
})
export class AppComponent implements OnInit {
    constructor(private heroService: HeroService) {}

    title = 'Tour of Heroes';

    heroes: Hero[];

    selectedHero: Hero;

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    private async getHeroes() {
        this.heroes = await this.heroService.getHeroes();
    }
}
