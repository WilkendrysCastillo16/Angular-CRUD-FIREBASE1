import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTareasComponent } from './Componentes/list-tareas/list-tareas.component';
import { CreatTareasComponent } from './Componentes/creat-tareas/creat-tareas.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTareasComponent,
    CreatTareasComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
