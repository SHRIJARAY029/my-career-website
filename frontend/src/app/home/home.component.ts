import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { AboutMeComponent } from '../about-me/about-me.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {

  constructor(private router: Router) {}
  title = 'my-career-website';
  isCollapsed = false;
  linkedinUrl = 'https://www.linkedin.com/in/shrija-ray-9b8193175/';
  githubUrl = 'https://github.com/SHRIJARAY029';
  email = 'shrijaray@gmail.com';
  contactNumber = '+91 6291332409';
  showContact = false;

  navigateToSection(sectionId: string): void {
    this.router.navigate(['/about-me'], { fragment: sectionId });
  }

  navigateTo(url: string): void {
    window.open(url, '_blank');
  }

  sendMail(): void {
    window.open(`mailto:${this.email}`, '_blank');
  }

  toggleContactDropdown(): void {
    this.showContact = !this.showContact; // Toggle dropdown visibility
  }

  

  // navigateToAboutMe() {
  //   this.router.navigate(['/about-me']);  // Correct path with a hyphen
  // }
  goToAboutMe() {
    this.router.navigate(['/about-me']);
  }
  

  
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
}
}

