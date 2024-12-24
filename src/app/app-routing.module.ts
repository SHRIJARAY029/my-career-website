// import { NgModule } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';
// import { AboutMeComponent } from './about-me/about-me.component'; 

// const routes: Routes = [
//   { path: 'aboutme', component: AboutMeComponent } ,// Define the route
//   { path: '', redirectTo: '/about-me', pathMatch: 'full' } // Optional: Redirect to About Me by default
//   // { path: '**', redirectTo: '/about-me' } // Fallback route
// ];

// @NgModule({
//   declarations: [],
//   imports: [
//     // CommonModule,
//     RouterModule.forRoot(routes)
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AboutMeComponent } from './about-me/about-me.component'; // Correctly import the AboutMe component

// // const routes: Routes = [
// //   { path: 'about-me', component: AboutMeComponent },  // Ensure the correct path with a hyphen is used
// //   { path: '', redirectTo: '/about-me', pathMatch: 'full' }, // Optional default route
// //   // Add other routes here
// // ];
// const routes: Routes = [
//   { path: 'about-me', component: AboutMeComponent },
//   { path: '', redirectTo: '/about-me', pathMatch: 'full' }, // default route
//   { path: '**', redirectTo: '/about-me' } // wildcard route to catch 404
// ];


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// import { AboutMeComponent } from './about-me/about-me.component'; // Correctly import the AboutMe component


// const routes: Routes = [
//   { path: 'about-me', component: AboutMeComponent },
//   { path: '', redirectTo: '/about-me', pathMatch: 'full' },
//   { path: '**', redirectTo: '/about-me' }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component'; // Import the component
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent }, // Define the route
  { path: 'home', component:HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route (optional)
  { path: '**', redirectTo: '/home' } // Wildcard route for unknown paths (optional)
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
