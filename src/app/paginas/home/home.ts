import { Component, OnInit } from '@angular/core';
import { NavBar } from '../../componentes/nav-bar/nav-bar';
import { Card } from '../../componentes/card/card';
import { Footer } from '../../componentes/footer/footer';
import { Details } from '../../componentes/details/details';
import { CommonModule } from '@angular/common';
import { Translate } from '../../servicios/translate';
import { Subscription } from 'rxjs';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home',
  imports: [NavBar,
    //Card,
    Footer,
    CommonModule,
    Details,
    FontAwesomeModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  whoIAmTitle = '';
  whoIAmContent = '';
  expTitle = '';
  expJobTitle = '';
  expCopany = '';
  expDate = '';
  expDescription = '';
  contactTitle = '';
  contactContent = '';
  techsTitle = '';
  private subs: Subscription[] = [];
  constructor(private translate: Translate,
    private faIconLibrary: FaIconLibrary
  ) { 
    faIconLibrary.addIconPacks(fab);
  }
  ngOnInit() {
    this.subs.push(
      this.translate.get('HOME.WHO_I_AM.TITLE').subscribe(text => this.whoIAmTitle = text),
      this.translate.get('HOME.WHO_I_AM.CONTENT').subscribe(text => this.whoIAmContent = text),
      this.translate.get('HOME.EXPERIENCE.TITLE').subscribe(text => this.expTitle = text),
      this.translate.get('HOME.EXPERIENCE.JOB_TITLE').subscribe(text => this.expJobTitle = text),
      this.translate.get('HOME.EXPERIENCE.COMPANY_NAME').subscribe(text => this.expCopany = text),
      this.translate.get('HOME.EXPERIENCE.DATE').subscribe(text => this.expDate = text),
      this.translate.get('HOME.EXPERIENCE.DESCRIPTION').subscribe(text => this.expDescription = text),
      this.translate.get('HOME.CONTACT_ME.TITLE').subscribe(text => this.contactTitle = text),
      this.translate.get('HOME.CONTACT_ME.CONTENT').subscribe(text => this.contactContent = text),
      this.translate.get('HOME.TECHNOLOGIES.TITLE').subscribe(text => this.techsTitle = text)
    );

  }

  images = [
    "Angular",
    "Docker",
    "Java",
    "Mysql",
    "Postgresql",
    "Postman",
    "Python",
    "Ibm-app-connect",
    "Ibm-mq"
  ];

}
