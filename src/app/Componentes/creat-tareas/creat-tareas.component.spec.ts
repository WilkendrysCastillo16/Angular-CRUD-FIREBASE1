import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatTareasComponent } from './creat-tareas.component';

describe('CreatTareasComponent', () => {
  let component: CreatTareasComponent;
  let fixture: ComponentFixture<CreatTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatTareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
