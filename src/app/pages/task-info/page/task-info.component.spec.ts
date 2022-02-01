import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";
import { BackendService } from "src/app/backend.service";

import { TaskInfoComponent } from "./task-info.component";

describe("TaskInfoComponent", () => {
  let component: TaskInfoComponent;
  let fixture: ComponentFixture<TaskInfoComponent>;
 

 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskInfoComponent],
      providers: [
         BackendService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of([{id: 1}]),
          }
        },
        
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
     
  });
   
  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

   
});
