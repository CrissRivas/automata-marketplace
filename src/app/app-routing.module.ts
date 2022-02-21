import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistasComponent } from './pages/artistas/artistas.component';
import { LinksComponent } from './pages/links/links.component';
import { LoginComponent } from './pages/login/login.component';
import { KartComponent } from './pages/kart/kart.component';
import { PerdidoComponent } from './pages/perdido/perdido.component';
import { ArtistaComponent } from './pages/artista/artista.component';
import { KomicsComponent } from './pages/komics/komics.component';
import { KomicComponent } from './pages/komic/komic.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CorreoAuthComponent } from "./pages/correo-auth/correo-auth.component";
import { EnvioComponent } from "./pages/envio/envio.component";

const routes: Routes = [
  {path: '',redirectTo: '/home',pathMatch: 'full'},
  {path: 'artistas', component: ArtistasComponent},
  {path: 'correo/:id', component: CorreoAuthComponent},
  {path: 'links', component: LinksComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'login', component: LoginComponent},
  {path: 'kart', component: KartComponent},
  {path: 'artista/:idArtista', component: ArtistaComponent},
  {path: 'comic/:idKomic', component: KomicComponent},
  {path: 'home', component: KomicsComponent},
  {path: 'envio', component: EnvioComponent},
  {path: '**',  component: PerdidoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
