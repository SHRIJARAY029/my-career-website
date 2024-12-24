import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule, NgFor, NgForOf, NgIf } from '@angular/common';  // Import CommonModule
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'; 
// import { ChartsModule } from 'ng2-charts';
// import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // MatCardModule,
    NgFor,NgForOf,NgIf,
    CommonModule,
    AppRoutingModule , // Add CommonModule here
    RouterModule// Add RouterModule here
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

