import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos 
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

//Componentes 


import { AppComponent } from './app.component';
import { ListTareasComponent } from './Componentes/list-tareas/list-tareas.component';
import { CreatTareasComponent } from './Componentes/creat-tareas/creat-tareas.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ListTareasComponent,
    CreatTareasComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
