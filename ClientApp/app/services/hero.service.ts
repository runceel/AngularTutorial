import { Injectable } from '@angular/core';
import { Hero } from "../models/Hero";
import { Http } from "@angular/http";

import "rxjs/add/operator/toPromise"

@Injectable()
export class HeroService {

    constructor(
        private http: Http,
    ) { }

    async getHeroes(): Promise<Hero[]> {
        var response = await this.http.get("/api/Heroes").toPromise();
        return response.json() as Hero[];
    }

    async getHero(id: number) {
        var response = await this.http.get(`/api/Heroes/${id}`).toPromise();
        return response.json() as Hero;
    }
}