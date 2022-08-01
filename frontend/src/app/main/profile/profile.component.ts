import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private _auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.test_jwt()
  }

  test_jwt() {
    console.log()
  }

}
