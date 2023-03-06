import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTopoComponent } from './menu-topo/menu-topo.component';
import { NoticiaRotativaComponent } from './noticia-rotativa/noticia-rotativa.component';
import { CardNoticiaComponent } from './card-noticia/card-noticia.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTopoComponent,
    NoticiaRotativaComponent,
    CardNoticiaComponent,
    CalcularMediaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
