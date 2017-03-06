import { Component, OnInit } from '@angular/core';
import { HeroService } from "../../services/hero.service";
import { Hero } from "../../models/Hero";

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit() { 
        this.getHeroes();
    }

    private async getHeroes() {
        this.heroes = (await this.heroService.getHeroes()).slice(1, 5);
    }
}