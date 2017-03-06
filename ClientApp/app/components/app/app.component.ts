import { Component, OnInit } from '@angular/core';
import { Hero } from "../../models/hero";
import { HeroService } from "../../services/hero.service";


@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'Tour of Heroes';
    
    ngOnInit(): void {
    }
}
