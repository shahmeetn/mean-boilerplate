import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: String;
  password: String;

  constructor(private flashMessagesService: FlashMessagesService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit({ value, valid }) {
    if (valid) {
      this.authService.authenticateUser(value).subscribe(data => {
        if (data.success) {
          this.flashMessagesService.show('Login successful', { cssClass: 'alert-success', timeout: 3000 });
          
          this.router.navigate(['/profile']);
        } else {
          this.flashMessagesService.show(data.message, { cssClass: 'alert-danger ', timeout: 3000 });
          this.router.navigate(['/login']);
        }
      });
    } else {
      this.flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 })
      return false;
    }
  }

}
