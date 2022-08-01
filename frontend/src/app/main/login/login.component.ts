import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../app.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  username = '';
  password = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(
    private _auth: AuthService,
    private router: Router,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onFormSubmit(): void {
    this.isLoadingResults = true;
    this._auth.login(this.loginForm.value)
      .subscribe(() => {
        this.isLoadingResults = false;
        this.router.navigate(['/secure']).then(_ => console.log('You are secure now!'));
      }, (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
