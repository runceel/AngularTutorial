import { Injectable } from '@angular/core';
import { Hero } from "../models/Hero";
import { Http, Headers } from "@angular/http";

import "rxjs/add/operator/toPromise"

@Injectable()
export class HeroService {

    private headers = new Headers({'Content-Type': 'application/json'});

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

    async update(hero: Hero) {
        const url = `/api/Heroes/${hero.id}`;
        await this.http.put(url, JSON.stringify(hero), { headers: this.headers }).toPromise();
        return hero;
    }

    async create(name: string) {
        const url = `/api/Heroes`;
        var response = await this.http.post(url, JSON.stringify({ name: name }), { headers: this.headers }).toPromise();
        return response.json() as Hero;
    }

    async delete(id: number) {
        const url = `/api/Heroes/${id}`;
        await this.http.delete(url).toPromise();
    }
}
