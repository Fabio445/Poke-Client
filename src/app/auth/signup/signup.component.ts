import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService) {}

  signUp() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    this.authService.signUp(this.username, this.password)
      .subscribe(
        () => {
          alert('Sign up successful');
          // Redirect to desired route, e.g., '/signin'
        },
        error => {
          console.error('Sign up failed:', error);
          alert('Sign up failed. Please try again.');
        }
      );
  }
}
