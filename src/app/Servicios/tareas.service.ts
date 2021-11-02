import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private firestore: AngularFirestore) { }

  agregarTarea(Tarea:any):Promise<any> {
    return this.firestore.collection("Tarea").add(Tarea);
  }

  GetTareas():Observable<any>{
    return this.firestore.collection("Tarea", ref => ref.orderBy("FechadeCreacion",'asc')).snapshotChanges();
  }

}
