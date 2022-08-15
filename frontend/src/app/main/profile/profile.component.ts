import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profileInfo: any;

  constructor(
    private _auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.testJWT()
    this.profileInfo = this.getProfile()
  }

  testJWT() {
    console.log()
  }

  getProfile() {
    return {
      name: 'John Doe',
      email: 'john@gmail.com',
      username: 'jdoe',
      followers: 6,
      following: 2,
      organization: 'NEMO - UFES',
      location: 'Vitória - ES',
      bio: 'I am a software engineer',
      avatar: 'https://avatars.githubusercontent.com/u/17932824?v=4'
    }
  }

  getProjects() {

  }

}
