import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { BackendService } from "src/app/backend.service";

import { TasksListComponent } from "./tasks-list.component";

describe("TasksListComponent", () => {
  let component: TasksListComponent;
  let fixture: ComponentFixture<TasksListComponent>;

 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksListComponent],
      providers: [ BackendService ],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

 
  
  
});
