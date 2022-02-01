import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatTableModule}  from '@angular/material/table';

import { TaskInfoComponent } from './page/task-info.component'; 



@NgModule({
  declarations: [
    TaskInfoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: ':id', component: TaskInfoComponent }]),
    MatTableModule,
     
  ]
})
export class TaskInfoModule { }
