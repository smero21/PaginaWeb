import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { State } from '../../servicios/state';
import { Translate } from '../../servicios/translate';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar implements OnInit {
  private router = inject(Router);
  private subs: Subscription[] = [];
  navHome = '';
  navAboutMe = '';
  navBlog = '';
  pages = ['', 'about-me', 'blog'];
  currentTheme: 'light' | 'dark' = 'light';
  currentLanguage: 'es' | 'en' | 'ru' | 'de' = 'en';

  constructor(private state: State,
    private translate: Translate) { }

  ngOnInit() {
    // Suscribirse a cambios
    this.state.theme$.subscribe(theme => {
      this.currentTheme = theme;
      this.applyTheme(theme);
    });

    this.state.language$.subscribe(lang => {
      this.currentLanguage = lang;
    });

    this.subs.push(
      this.translate.get('NAV.HOME').subscribe(text => this.navHome = text),
      this.translate.get('NAV.ABOUT_ME').subscribe(text => this.navAboutMe = text),
      this.translate.get('NAV.BLOG').subscribe(text => this.navBlog = text)
    );

  }
  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }
  getPageTitle(page: string) {
    switch (page) {
      case '': return this.navHome;
      case 'about-me': return this.navAboutMe;
      case 'blog': return this.navBlog;
      default: return '';
    }
  }
  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    console.log("estado: ", this.state.setTheme(newTheme));
    this.state.setTheme(newTheme);
  }
  private applyTheme(theme: 'light' | 'dark') {
    if (theme === 'dark') {
      document.body.style.background = 'linear-gradient(135deg, #494d4f 0%, #232a33 100%)';
      document.body.style.color = '#fff';
    } else {
      document.body.style.background = 'linear-gradient(135deg, #a9bbc6ff 0%, #f3f4f6 100%)';
      document.body.style.color = '#232526';
    }
  }
  get themeUrl() {
    return this.currentTheme === 'dark' ? 'light' : 'dark';
  }

  toggleLanguage() {
    const newLanguage = this.currentLanguage === 'en' ? 'es' : (this.currentLanguage === 'es' ? 'ru' : (this.currentLanguage === 'ru' ? 'de' : 'en'));
    this.state.setLanguage(newLanguage);
    window.location.reload();
  }
  get languageIcon() {
    return this.currentLanguage;
  }
}
