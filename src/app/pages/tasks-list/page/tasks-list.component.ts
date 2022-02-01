import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
import { Task } from 'src/app/backend.service'

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
   
  
  constructor( ) { }

  ngOnInit(): void {
    
    
     
    
  }

  /**
   * method for redirect to full task info
   */
  openTask(){
    console.log('openTask');
    
  }
}
