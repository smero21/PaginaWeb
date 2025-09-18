import { Component } from '@angular/core';
import { NavBar } from '../../componentes/nav-bar/nav-bar';
import { Footer } from '../../componentes/footer/footer';
import { Translate } from '../../servicios/translate';

@Component({
  selector: 'app-blog',
  imports: [NavBar, Footer],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog {
  title = '';
  content = '';
  comingSoon = '';

  constructor(private translate: Translate) {
  }
  ngOnInit() {
    this.translate.get('BLOG.TITLE').subscribe(text => this.title = text);
    this.translate.get('BLOG.CONTENT').subscribe(text => this.content = text);
    this.translate.get('BLOG.COMING_SOON').subscribe(text => this.comingSoon = text);
  }
}
