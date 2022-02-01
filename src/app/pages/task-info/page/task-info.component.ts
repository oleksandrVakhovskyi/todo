import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.css']
})
export class TaskInfoComponent implements OnInit {

  constructor( private backend: BackendService) { }

  ngOnInit(): void {
    this.backend.tasks().subscribe(
      data => {console.log(data);
      }
    )
  }

}
