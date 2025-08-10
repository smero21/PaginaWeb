import { Component } from '@angular/core';
import { NavBar } from '../../componentes/nav-bar/nav-bar';
import { Footer } from '../../componentes/footer/footer';

@Component({
  selector: 'app-about-me',
  imports: [NavBar, Footer],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {

}
