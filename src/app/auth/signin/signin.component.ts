import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {} 

  signIn() {
    this.authService.signIn(this.username, this.password)
      .subscribe(
        response => {
          console.log('Login successful', response);
          alert('Login successful');
          this.router.navigate(['/home']);
        },
        error => {
          console.error('Login failed:', error);
          alert('Login failed. Please try again.');
        }
      );
  }
}
