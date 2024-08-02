import { Component } from '@angular/core';

@Component({
  selector: 'app-find-roommate',
  templateUrl: './find-roommate.component.html',
  styleUrl: './find-roommate.component.css'
})
export class FindRoommateComponent {
  isForRent: boolean = false;

  toggleForRent() {
    this.isForRent = true;
}
}