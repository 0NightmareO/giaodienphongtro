// import { Component, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.css'
// })
// export class NavbarComponent {

//   @Output() logoClick = new EventEmitter<void>();

//   onLogoClick() {
//     this.logoClick.emit();
//   }
// }


import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() logoClick = new EventEmitter<void>();

  onLogoClick() {
    this.logoClick.emit();
  }
}

// import { Component, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent {
//   @Output() logoClick = new EventEmitter<void>();

//   onLogoClick() {
//     console.log('Logo clicked'); // Xác nhận sự kiện logo click
//     this.logoClick.emit();
//   }
// }
