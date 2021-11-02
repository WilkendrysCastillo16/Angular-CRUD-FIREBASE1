import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { TareasService } from 'src/app/Servicios/tareas.service';

@Component({
  selector: 'app-list-tareas',
  templateUrl: './list-tareas.component.html',
  styleUrls: ['./list-tareas.component.css']
})
export class ListTareasComponent implements OnInit {
  Tareas: any[] = [];

  constructor(private _tareasservice:TareasService) { 
    
  }

  ngOnInit(): void {
    this.getTareas();
  }

  getTareas(){
    this._tareasservice.GetTareas().subscribe(data =>{
      this.Tareas = [];
     data.forEach((element:any) => {
         /*console.log(element.payload.doc.id);*/

        this.Tareas.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.Tareas);
    });
  }

}
