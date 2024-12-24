import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'about-me', component: AboutMeComponent },
    { path: 'home', component: HomeComponent }
];

