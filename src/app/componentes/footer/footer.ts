import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  toggleDarkMode(){
    //document.getElementsByClassName('contentFooter')[0].classList.toggle('dark-mode');
  }
}
