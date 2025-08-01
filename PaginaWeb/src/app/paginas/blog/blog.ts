import { Component } from '@angular/core';
import { NavBar } from '../../componentes/nav-bar/nav-bar';
import { Footer } from '../../componentes/footer/footer';

@Component({
  selector: 'app-blog',
  imports: [NavBar, Footer],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog {

}
