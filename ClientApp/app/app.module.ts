import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeroService } from "./services/hero.service";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        AppRoutingModule,
    ],
    providers: [HeroService],
})
export class AppModule {
}
