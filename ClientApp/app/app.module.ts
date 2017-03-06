import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
    ]
})
export class AppModule {
}
