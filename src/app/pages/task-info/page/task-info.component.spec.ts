import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BackendService } from 'src/app/backend.service';

import { TaskInfoComponent } from './task-info.component';

describe('TaskInfoComponent', () => {
  let component: TaskInfoComponent;
  let fixture: ComponentFixture<TaskInfoComponent>;
  let serviceSpy= jasmine.createSpyObj('Service', {
    'retrieveData1': of('mock data'),
    'other': 'some val'
});
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskInfoComponent ],
      providers: [  
         BackendService, 
         {
          provide: ActivatedRoute,
          useValue: {
              snapshot: {
                  paramMap: {
                      get(): string {
                          return '1';
                      },
                  },
              },
          },
      },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
