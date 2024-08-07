import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'giaodien';

  showMenu: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.checkUrl(event.urlAfterRedirects);
    });
  }

  checkUrl(url: string) {
    // Ẩn menu nếu URL chứa '/home', hoặc các URL khác bạn muốn ẩn
    this.showMenu = !(url.includes('/home'));
}
  toggleMenu() {
  this.showMenu = !this.showMenu;
  }
}


// import { Component, OnInit } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';
// import { filter } from 'rxjs/operators';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   showMenu: boolean = true;

//   constructor(private router: Router) {}

//   ngOnInit() {
//     this.router.events.pipe(
//       filter(event => event instanceof NavigationEnd)
//     ).subscribe((event: NavigationEnd) => {
//       this.checkUrl(event.urlAfterRedirects);
//     });
//   }

//   checkUrl(url: string) {

//     this.showMenu = !(url.includes('/home'));
//   }

//   toggleMenu() {
//     this.showMenu = !this.showMenu;
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { Router, NavigationEnd, Event } from '@angular/router';
// import { filter } from 'rxjs/operators';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   showMenu: boolean = true;

//   constructor(private router: Router) {}

//   ngOnInit() {
//     this.router.events.pipe(
//       filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
//     ).subscribe((event: NavigationEnd) => {
//       console.log(`NavigationEnd: ${event.urlAfterRedirects}`); // Kiểm tra URL hiện tại
//       this.checkUrl(event.urlAfterRedirects);
//     });
//   }

//   checkUrl(url: string) {
//     console.log(`Checking URL: ${url}`); // Kiểm tra URL được truyền vào
//     // Ẩn menu nếu URL chứa '/home'
//     this.showMenu = !(url.includes('/home'));
//     console.log(`Show menu: ${this.showMenu}`); // Xác nhận trạng thái showMenu
//   }

//   toggleMenu() {
//     this.showMenu = !this.showMenu;
//     console.log(`Toggle menu: ${this.showMenu}`); // Xác nhận việc thay đổi trạng thái menu
//   }
// }
