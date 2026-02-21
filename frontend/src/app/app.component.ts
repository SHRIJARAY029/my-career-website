import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'my-career-website';
  isCollapsed = false;
  linkedinUrl = 'https://www.linkedin.com/in/shrija-ray-9b8193175/';
  githubUrl = 'https://github.com/SHRIJARAY029';
  email = 'shrijaray@gmail.com';
  contactNumber = '+91 6291332409';
  showContact = false;

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

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToAboutMe() {
    this.router.navigate(['/about-me']);
  }
  

  
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

}

