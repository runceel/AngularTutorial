import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HeroService } from "../../services/hero.service";
import { Hero } from "../../models/hero";

@Component({
    moduleId: module.id + '',
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: [ './heroes.component.css' ]
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

    async add(name: string) {
        name = name.trim();
        if (!name) return;

        var hero = await this.heroService.create(name);
        this.heroes.push(hero);
        this.selectedHero = null;
    }

    async delete(hero: Hero) {
        await this.heroService.delete(hero.id);
        this.heroes = this.heroes.filter(x => x !== hero);
        if (this.selectedHero === hero) {
            this.selectedHero = null;
        }
    }

    private async getHeroes() {
        this.heroes = await this.heroService.getHeroes();
    }
}