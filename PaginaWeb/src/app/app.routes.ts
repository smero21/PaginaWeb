import { Routes } from '@angular/router';
import {Home} from './paginas/home/home';
import { Blog } from './paginas/blog/blog';

export const routes: Routes = [
    {path: '', component: Home },
    {path: 'blog', component: Blog },
    
];
