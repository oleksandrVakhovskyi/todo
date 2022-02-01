import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

import { TasksListComponent } from './page/tasks-list.component';
import { ButtonComponent } from '../../components/button/button.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    TasksListComponent,
    ButtonComponent,
    TableComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TasksListComponent }]),
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class TasksListModule { }
