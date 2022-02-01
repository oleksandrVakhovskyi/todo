import { AfterViewChecked, Component, Input, OnChanges, OnInit } from '@angular/core';
import { BackendService, Task } from 'src/app/backend.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit , OnChanges{
  @Input() tasksList: Task[];
  @Input() count: number;
   
  

  displayedColumns: string[] = ['id', 'description', 'assigneeId', 'completed'];
   
  constructor(private backend: BackendService) {
    
   }

  ngOnInit(): void { 
    this.backend.tasks().subscribe(
      data => {
        this.tasksList = data;
        console.log( this.tasksList,  !!this.tasksList);
      }
    )
    console.log( 'table', this.tasksList);
     
  }
  ngOnChanges(): void { 
    
    console.log( 'ngAfterViewChecked', this.tasksList , this.count);
     

  }

}
