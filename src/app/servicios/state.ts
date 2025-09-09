import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class State {
  private currentTheme = new BehaviorSubject<'light' | 'dark'>('light');
  private currentLanguage = new BehaviorSubject<'es' | 'en' | 'ru' | 'de'>('en');

  theme$ = this.currentTheme.asObservable();
  language$ = this.currentLanguage.asObservable();

  constructor() {
    this.loadPreferences();
  }

  private loadPreferences() {
    const savedTheme = localStorage.getItem('theme');
    const savedLang = localStorage.getItem('language');
    
    if (savedTheme) this.currentTheme.next(savedTheme as 'light' | 'dark');
    if (savedLang) this.currentLanguage.next(savedLang as 'es' | 'en' | 'ru' | 'de');
  }

  setTheme(theme: 'light' | 'dark') {
    this.currentTheme.next(theme);
    localStorage.setItem('theme', theme);
  }

  setLanguage(lang: 'es' | 'en' | 'ru'| 'de') {
    this.currentLanguage.next(lang);
    localStorage.setItem('language', lang);
  }
  detectInitialLanguage() {
    const savedLang = localStorage.getItem('language');
    const browserLang = navigator.language.split('-')[0];
    return savedLang || browserLang || 'es';
  }

  getCurrentTheme() {
    return this.currentTheme.value;
  }

  getCurrentLanguage() {
    return this.currentLanguage.value;
  }
}