import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-tareas',
  templateUrl: './list-tareas.component.html',
  styleUrls: ['./list-tareas.component.css']
})
export class ListTareasComponent implements OnInit {
  items: Observable<any[]>;

  constructor(firestore: AngularFirestore) { 
    this.items = firestore.collection('items').valueChanges();
  }

  ngOnInit(): void {
  }

}
