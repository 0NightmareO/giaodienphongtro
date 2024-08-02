import { Component } from '@angular/core';

@Component({
  selector: 'app-register-owner-content',
  templateUrl: './register-owner-content.component.html',
  styleUrl: './register-owner-content.component.css'
})
export class RegisterOwnerContentComponent {
  toast: any;

  ngAfterViewInit() {
    const toastEl = document.getElementById('liveToast');
    this.toast = new (window as any).bootstrap.Toast(toastEl);
  }

  showToast() {
    this.toast.show();
  }
}