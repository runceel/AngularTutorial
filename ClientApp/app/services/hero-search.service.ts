import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { Hero } from "../models/hero";

@Injectable()
export class HeroSearchService {

    constructor(
        private http: Http,
    ) { }

    async earch(term: string) {
        var response = await this.http.get(`/api/Heroes?name=${term}`).toPromise();
        return response.json() as Hero[];
    }
}