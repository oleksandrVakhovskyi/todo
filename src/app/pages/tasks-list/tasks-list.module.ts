import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TasksListComponent } from './page/tasks-list.component';





@NgModule({
  declarations: [
    TasksListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TasksListComponent }]),
  ]
})
export class TasksListModule { }
