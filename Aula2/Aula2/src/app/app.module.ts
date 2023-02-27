import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTopoComponent } from './menu-topo/menu-topo.component';
import { NoticiaRotativaComponent } from './noticia-rotativa/noticia-rotativa.component';
import { CardNoticiaComponent } from './card-noticia/card-noticia.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MenuTopoComponent,
    NoticiaRotativaComponent,
    CardNoticiaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
