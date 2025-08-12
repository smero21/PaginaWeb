import { Injectable } from '@angular/core';
import { State } from './state';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap, switchMap, map, take, filter } from 'rxjs/operators';;

@Injectable({
  providedIn: 'root'
})

export class Translate {
  private translations: { [lang: string]: any } = {};
  private currentTranslations = new BehaviorSubject<any>({});

  constructor(
    private http: HttpClient,
    private state: State
  ) {
    // Inicializar con el idioma actual del StateService
    this.initLanguage();
  }

  private initLanguage(): void {
    // Reaccionar a cambios de idioma desde el StateService
    this.state.language$.pipe(
      switchMap(lang => this.loadLanguage(lang))
    ).subscribe();
  }

  private loadLanguage(lang: string): Observable<any> {
    // Si ya tenemos las traducciones, las usamos directamente
    if (this.translations[lang]) {
      this.currentTranslations.next(this.translations[lang]);
      return of(this.translations[lang]);
    }

    // Cargar desde el archivo JSON
    return this.http.get(`/i18n/${lang}.json`).pipe(
      tap(translations => {
        this.translations[lang] = translations;
        this.currentTranslations.next(translations);
      }),
      catchError(error => {
        console.error(`Error loading ${lang} translations:`, error);
        return of({});
      })
    );
  }

  // Método para obtener traducciones
  public get(key: string, params?: any): Observable<string> {
  // Si ya hay traducciones cargadas
  if (Object.keys(this.currentTranslations.value).length > 0) {
    return of(this.getTranslation(key, params));
  }
  
  // Si no, esperar a que estén disponibles
  return this.currentTranslations.pipe(
    filter(translations => Object.keys(translations).length > 0),
    take(1),
    map(() => this.getTranslation(key, params))
  );
}

  private getTranslation(key: string, params?: any): string {
    const keys = key.split('.');
    let translation = this.currentTranslations.value;

    for (const k of keys) {
      translation = translation?.[k];
      if (translation === undefined) break;
    }

    if (typeof translation !== 'string') {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }

    return this.replaceParams(translation, params);
  }

  private replaceParams(translation: string, params?: { [key: string]: string }): string {
    if (!params) return translation;

    return Object.keys(params).reduce((result, param) => {
      return result.replace(new RegExp(`{{${param}}}`, 'g'), params[param]);
    }, translation);
  }

  // Observable para detectar cambios en las traducciones
  public onTranslationsChange(): Observable<any> {
    return this.currentTranslations.asObservable();
  }
}