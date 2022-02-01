import {  Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
 
import { BackendService, Task } from 'src/app/backend.service'
 

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  @Input() tasksList: Task[];
  @Input() count: number;
  @Output() openTask: EventEmitter<number> = new EventEmitter()
  

  displayedColumns: string[] = ['id', 'description', 'assigneeId', 'completed'];
   
  constructor(private backend: BackendService) {
    
   }

  ngOnInit(): void { 
    this.backend.tasks().subscribe(
      data => {
        this.tasksList = data;
      }
    )
     
  }
  
  open(id:number){
    console.log(id);
    this.openTask.next(id)
    

  }

}
