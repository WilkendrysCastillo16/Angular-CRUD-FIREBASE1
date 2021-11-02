import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private firestore: AngularFirestore) { }

  agregarTarea(Tarea:any):Promise<any> {
    return this.firestore.collection("Tarea").add(Tarea);
  }

}
