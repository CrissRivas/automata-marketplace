import { Component, OnInit } from '@angular/core';
import  { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  public activeMenu:Boolean = false;
  constructor(
    private autService:AuthService
  ) { }
  ngOnInit(): void {
this.verificaToken();
  }

  verificaToken(){
    if (this.logeado()) {
      if (!this.autService.verifyToken()) {
        this.logOut();
      }
    }
  }

  logeado(){
    return this.autService.loggedIn();
  }

  logOut(){
    this.autService.logout();
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }
}
