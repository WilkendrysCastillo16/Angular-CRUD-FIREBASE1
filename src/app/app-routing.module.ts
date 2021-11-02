import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatTareasComponent } from './Componentes/creat-tareas/creat-tareas.component';
import { ListTareasComponent } from './Componentes/list-tareas/list-tareas.component';

const routes: Routes = [
  {path:"",redirectTo:"list-tareas", pathMatch:"full"},
  {path:"list-tareas",component: ListTareasComponent},
  {path:"Create-Tareas",component:CreatTareasComponent},
  {path:"EditTareas/:id",component:CreatTareasComponent},
  {path:"**",redirectTo:"list-tareas", pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
