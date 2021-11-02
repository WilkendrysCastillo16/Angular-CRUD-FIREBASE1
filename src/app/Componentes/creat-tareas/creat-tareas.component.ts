import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  id:string | null;
  titulo = 'Agregar Tarea';
  
  constructor(private FB: FormBuilder,
              private _tareasService:TareasService,
              private router: Router,
              private toastr: ToastrService,
              private aRoute: ActivatedRoute) { 
    this.CreateTareas= this.FB.group({
      Materia:["",Validators.required],
      Profesor:["",Validators.required],
      NombreTrabajo:["",Validators.required],
      FechaEntrega:["",Validators.required]
    })
    this.id= this.aRoute.snapshot.paramMap.get("id");
    console.log(this.id);    
  }

  ngOnInit(): void {
    this.esEditar();
  }

  AgregarEditarTarea(){
    this.Submitted = true;

    if(this.CreateTareas.invalid){
      return;
    }

    if(this.id == null){
      this.AgregarTarea();

    }else{
      this.EditarTareas(this.id);
    }
    
  }
  EditarTareas(id:string){
    const tareas : any = {
      Materia:this.CreateTareas.value.Materia,
      Profesor:this.CreateTareas.value.Profesor,
      NombreTrabajo:this.CreateTareas.value.NombreTrabajo,
      FechaEntrega:this.CreateTareas.value.FechaEntrega,
      FechadeActualizacion : new Date()
    }
    this.Cargando = true;
    this._tareasService.Actualizartarea(id,tareas).then(()=>{
      this.Cargando = false;
      this.toastr.info("El Empleado fue modificando con Exito","¡Empleado Modificado!",{
        positionClass:"toast-bottom-right"
      })
      this.router.navigate(["/list-Tareas"]);
    })
  }

  AgregarTarea(){
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

esEditar(){
  
  if(this.id !==null){
    this.titulo = 'Editar Tarea';
    this.Cargando = true;
    this._tareasService.GetTarea(this.id).subscribe(data =>{
      this.Cargando = false;

      console.log(data.payload.data()["Materia"]);
      this.CreateTareas.setValue({

        Materia: data.payload.data()["Materia"],
        Profesor: data.payload.data()["Profesor"],
        NombreTrabajo: data.payload.data()["NombreTrabajo"],
        FechaEntrega: data.payload.data()["FechaEntrega"]
      })
    });

  }
}
}
