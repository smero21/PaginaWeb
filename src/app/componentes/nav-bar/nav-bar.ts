import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {App} from '../../app';

@Component({
  selector: 'app-nav-bar',
  imports: [ CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {
  private router = inject(Router);
  pages = ['', 'blog','about-me'];
  languages = ['icons/languages/spanish', 'icons/languages/english', 'icons/languages/russian'];
  currentLanguageIndex = 1;
  isDarkMode = false;
  constructor(app: App) {
    //app.currentLanguage=this.languageIcon.;
    this.isDarkMode=app.isDarkMode;
    console.log('language index: ', this.currentLanguageIndex);
  }
  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }
  getPageTitle(page: string) {
    if (page === '') return 'Home';
    if (page === 'about-me') return 'About Me';
    return page.charAt(0).toUpperCase() + page.slice(1);
  }
  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    this.isDarkMode = !this.isDarkMode;
    console.log('Dark mode toggled:', this.isDarkMode);
  }
  toggleLanguage(){
    this.currentLanguageIndex = (this.currentLanguageIndex + 1) % this.languages.length;
    return this.currentLanguageIndex;
  }
  get darkModeContent() {
    return this.isDarkMode ? 'icons/themes/light' : 'icons/themes/dark';
  }
  get languageIcon() {
    return this.languages[this.currentLanguageIndex]; 
  }
}
