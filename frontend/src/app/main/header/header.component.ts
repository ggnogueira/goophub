import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;
  
  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this._authService.isLoggedIn.subscribe(value => {
      this.isLoggedIn = value;
      console.log(value)
    });
  }

  onLogout() {
    this._authService.logout();
    this._authService.isLoggedIn.subscribe(value => {
      this.isLoggedIn = value;
      console.log(value)
    });
  }

}
