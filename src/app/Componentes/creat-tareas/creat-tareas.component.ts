import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TareasService } from 'src/app/Servicios/tareas.service';

@Component({
  selector: 'app-creat-tareas',
  templateUrl: './creat-tareas.component.html',
  styleUrls: ['./creat-tareas.component.css']
})
export class CreatTareasComponent implements OnInit {
  CreateTareas: FormGroup;
  Submitted = false;
  Cargando= false;

  constructor(private FB: FormBuilder,
              private _tareasService:TareasService,
              private router: Router,
              private toastr: ToastrService) { 
    this.CreateTareas= this.FB.group({
      Materia:["",Validators.required],
      Profesor:["",Validators.required],
      NombreTrabajo:["",Validators.required],
      FechaEntrega:["",Validators.required]
    })
  }

  ngOnInit(): void {
  }

  AgregarTarea(){
    this.Submitted = true;

    if(this.CreateTareas.invalid){
      return;
    }

    const tareas : any = {
      Materia:this.CreateTareas.value.Materia,
      Profesor:this.CreateTareas.value.Profesor,
      NombreTrabajo:this.CreateTareas.value.NombreTrabajo,
      FechaEntrega:this.CreateTareas.value.FechaEntrega,
      FechadeCreacion: new Date(),
      FechadeActualizacion : new Date()
    }
    this.Cargando = true;
    this._tareasService.agregarTarea(tareas).then(() =>{
      this.toastr.success("La Tarea se Registro con exito","¡Tarea Registrada!",{
        positionClass:'toast-bottom-right'
      });
      this.Cargando=false;
      this.router.navigate(["/list-Tareas"]);
    }).catch (error =>{
      console.log(error);
    })
  }


}
