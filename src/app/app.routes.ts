import { Routes } from '@angular/router';
import { Home } from './paginas/home/home';
import { Blog } from './paginas/blog/blog';
import { AboutMe } from './paginas/about-me/about-me';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'blog', component: Blog },
    { path: 'about-me', component: AboutMe },
];
