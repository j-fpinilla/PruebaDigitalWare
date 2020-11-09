import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BotonAgregarComponent } from './boton-agregar/boton-agregar.component';
import { MatrizComponent } from './matriz/matriz.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BotonAgregarComponent,
    MatrizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
