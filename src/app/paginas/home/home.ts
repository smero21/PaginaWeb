import { Component } from '@angular/core';
import { NavBar } from '../../componentes/nav-bar/nav-bar';
import { Card } from '../../componentes/card/card';
import { Footer } from '../../componentes/footer/footer';
import { Details } from '../../componentes/details/details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NavBar,
    Card,
    Footer,
    CommonModule,
    Details 
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  images = [
    "angular-original-wordmark.svg",
    "docker-original-wordmark.svg",
    "java-original-wordmark.svg",
    "mysql-original-wordmark.svg",
    "postgresql-original-wordmark.svg",
    "postman-original.svg",
    "python-original.svg",
    "ibm--app-connect-enterprise.svg",
    "ibm--mq.svg"
  ];
  
}
