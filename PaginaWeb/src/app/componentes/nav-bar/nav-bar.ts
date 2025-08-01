import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [TitleCasePipe, CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {
  private router = inject(Router);
  pages = ['', 'blog'];
  isDarkMode = false;
  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }
  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    this.isDarkMode = !this.isDarkMode;
  }
  get darkModeContent() {
    return this.isDarkMode ? 'icons/themes/light' : 'icons/themes/dark';
  }
}
