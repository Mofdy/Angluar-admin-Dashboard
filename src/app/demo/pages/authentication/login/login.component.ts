// angular import
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
// import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService ,private alertService: AlertService) { }

  ngOnInit(): void {
  }

  login() {

    if (this.email == '') {
      this.alertService.showInfo('Please enter email');
      return;
    }

    if (this.password == '') {
      this.alertService.showInfo('Please enter password');
      return;
    }

    this.auth.login(this.email, this.password);

    this.email = '';
    this.password = '';

  }

  // signInWithGoogle() {
  //   this.auth.googleSignIn();
  // }
}
