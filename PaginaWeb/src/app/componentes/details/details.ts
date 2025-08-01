import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.scss'
})
export class Details {
  isHide= false;
  toggleContent() {
    this.isHide = !this.isHide;
  }
}
