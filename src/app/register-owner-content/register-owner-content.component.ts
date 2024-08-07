import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadService } from '../services/upload/upload.service';

@Component({
  selector: 'app-register-owner-content',
  templateUrl: './register-owner-content.component.html',
  styleUrl: './register-owner-content.component.css'
})
export class RegisterOwnerContentComponent {
  registerForm: FormGroup;
  selectedFile: File | null = null;
  uploadService: any;

  constructor(private fb: FormBuilder, private _upload :UploadService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.registerForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('name', this.registerForm.get('name')?.value);
      formData.append('phone', this.registerForm.get('phone')?.value);
      formData.append('file', this.selectedFile);

      this.uploadService.uploadFile(formData).subscribe((response: any) => {
        console.log('Upload response:', response);
        // this.showToast();
      });
    }
  }

  // showToast(): void {
  //   const toastElement = document.getElementById('liveToast');
  //   if (toastElement) {
  //     const toast = new bootstrap.Toast(toastElement);
  //     toast.show();
  //   }
  // }
}