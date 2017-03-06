import { Component, OnInit, Input } from '@angular/core';
import { Hero } from "../../models/hero";
import { HeroService } from "../../services/hero.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

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

    hero: Hero;

    ngOnInit() { 
        this.route.params.subscribe((params: Params) => {
            this.getHeroById(+params['id']);
        });
    }

    goBack() {
        this.location.back();
    }

    private async getHeroById(id: number) {
        this.hero = await this.heroService.getHero(id);
    }
}