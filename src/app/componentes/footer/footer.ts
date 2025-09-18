import { Component } from '@angular/core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  constructor(private faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIconPacks(fab);
  }
  toggleDarkMode(){
    //document.getElementsByClassName('contentFooter')[0].classList.toggle('dark-mode');
  }
}
