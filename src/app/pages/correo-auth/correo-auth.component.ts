import { Component, OnInit } from '@angular/core';
import  { AuthService } from "../../services/auth.service"
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-correo-auth',
  templateUrl: './correo-auth.component.html',
  styleUrls: ['./correo-auth.component.scss']
})
export class CorreoAuthComponent implements OnInit {

  public id:string|null = null;
  public go:boolean=false;
  public msg:string= "Verificando...";

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params =>{
      this.id = params.get('id');
      if(this.id){
        this.authService.verifyEmail(this.id).subscribe( data =>{
          this.go= data.go;
          this.msg = data.msg;
          if(this.go){
            this.router.navigate(['/login'])
          }
        }
        )
      }
    })
  }

}
