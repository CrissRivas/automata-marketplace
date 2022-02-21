import { Component, OnInit } from '@angular/core';
import  { AuthService } from "../../services/auth.service"
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usuario = {
    email: '',
    password: ''
  };
  public newUsuario = {
    username:'',
    email: '',
    password: ''
  }
  public message:string = "Buscando..." ;
  public PassErr:boolean=false;
  public env:boolean= false;
  constructor(
    private autService:AuthService,
     private router: Router
  ) { }

  ngOnInit(): void {
this.autenticacion();
  }

  onLogin(log:any){

    this.autService.signInUser(this.usuario)
    .subscribe(
      res=>{


        localStorage.setItem('token', res.token);
        this.router.navigate(['/perfil']);

      },
      err=> {

        this.PassErr=true;

      })
  }
autenticacion(){
  if(this.autService.loggedIn()){
    this.router.navigate(['/perfil']);
  }
}
cerrarMSG(){
  this.env=!this.env;
}
  onSignUp(formSignUp:any){
    this.autService.signUpUser(this.newUsuario)
    .subscribe(res=>{
      this.message = res.message;
      this.env=true;
    },
    err=>{
      this.message = "Sucedio algo inesperado, intente despues"
      this.env=true;
    }
      )
  }
}
