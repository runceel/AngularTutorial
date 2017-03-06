import { Component, OnInit, Input } from '@angular/core';
import { Hero } from "../../models/hero";
import { HeroService } from "../../services/hero.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

@Component({
    moduleId: module.id + '',
    selector: 'my-hero-detail',
    templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    @Input()
    hero: Hero;

    ngOnInit() { 
        this.getHeroById();
    }

    goBack() {
        this.location.back();
    }

    private async getHeroById() {
        var id = +this.route.params['id'];
        this.hero = await this.heroService.getHero(id);
    }
}