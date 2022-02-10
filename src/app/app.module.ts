import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { SwiperModule } from 'swiper/angular';
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { AuthGuard } from './services/auth.guard';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicComponent } from './componentes/comic/comic.component';
import { ComicsComponent } from './componentes/comics/comics.component';
import { NavComponent } from './componentes/nav/nav.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { LinksComponent } from './pages/links/links.component';
import { LoginComponent } from './pages/login/login.component';
import { KartComponent } from './pages/kart/kart.component';
import { PerdidoComponent } from './pages/perdido/perdido.component';
import { ArtistaComponent } from './pages/artista/artista.component';
import { KomicsComponent } from './pages/komics/komics.component';
import { KomicComponent } from './pages/komic/komic.component';
import { CardComponent } from './componentes/card/card.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CorreoAuthComponent } from './pages/correo-auth/correo-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    ComicsComponent,
    NavComponent,
    ArtistasComponent,
    LinksComponent,
    LoginComponent,
    KartComponent,
    PerdidoComponent,
    ArtistaComponent,
    KomicsComponent,
    KomicComponent,
    CardComponent,
    PerfilComponent,
    CorreoAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    SwiperModule
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
