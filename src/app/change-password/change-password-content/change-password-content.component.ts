import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password-content',
  templateUrl: './change-password-content.component.html',
  styleUrl: './change-password-content.component.css'
})

export class ChangePasswordContentComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    this.togglePassword('currentPassword', 'togglePassword');
  }
  passwordError: string = '';
  confirmPasswordError: string = '';
  togglePassword(inputId: string, iconId: string): void {
    const passwordInput = document.getElementById(inputId) as HTMLInputElement;
    const toggleIcon = document.getElementById(iconId) as HTMLElement;
  
    if (passwordInput && toggleIcon) {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';
      toggleIcon.classList.toggle('bi-eye-slash', !isPassword);
      toggleIcon.classList.toggle('bi-eye', isPassword);
    }
  }
  validatePassword() {
    const passwordInput = document.getElementById('newPassword') as HTMLInputElement;
    const password = passwordInput.value;
    const passwordHelp = document.getElementById('passwordHelp') as HTMLElement;

    const minLength = /.{8,}/;
    const hasUpperCase = /[A-Z]/;
    const hasNumber = /[0-9]/;

    if (!minLength.test(password)) {
      this.passwordError = 'Mật khẩu phải có ít nhất 8 ký tự.';
    } else if (!hasUpperCase.test(password)) {
      this.passwordError = 'Mật khẩu phải chứa ít nhất 1 ký tự viết hoa.';
    } else if (!hasNumber.test(password)) {
      this.passwordError = 'Mật khẩu phải chứa ít nhất 1 ký tự số.';
    } else {
      this.passwordError = '';
    }

    passwordHelp.textContent = this.passwordError;
  }
  validateConfirmPassword() {
    const passwordInput = document.getElementById('newPassword') as HTMLInputElement;
    const confirmPasswordInput = document.getElementById('confirmPassword') as HTMLInputElement;
    const confirmPasswordHelp = document.getElementById('confirmPasswordHelp') as HTMLElement;

    if (confirmPasswordInput.value !== passwordInput.value) {
      this.confirmPasswordError = 'Mật khẩu xác nhận không khớp.';
    } else {
      this.confirmPasswordError = '';
    }

    confirmPasswordHelp.textContent = this.confirmPasswordError;
  }
}
