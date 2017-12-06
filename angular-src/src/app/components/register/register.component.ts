import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { AuthService } from '../../services/auth.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  name: String;
  userName: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService, private flashMessagesService: FlashMessagesService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit({ value, valid }) {
    if (valid) {
      console.log(value)
      if (!this.validateService.validateEmail(value.email)) {
        this.flashMessagesService.show('Invalid email format', { cssClass: 'alert-danger ', timeout: 3000 });
        return false;
      } else {
        this.authService.registerUser(value).subscribe(data => {
          if (data.success) {
            this.flashMessagesService.show('Registration completed successfully', { cssClass: 'alert-success', timeout: 3000 });
            this.router.navigate(['/login']);
          } else {
            this.flashMessagesService.show('Registration failed.', { cssClass: 'alert-danger ', timeout: 3000 });
            this.router.navigate(['/register']);
          }
        });
      }
    } else {
      this.flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 })
      return false;
    }
  }

}
