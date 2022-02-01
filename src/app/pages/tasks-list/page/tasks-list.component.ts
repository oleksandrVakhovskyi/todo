import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BackendService } from "src/app/backend.service";
import { Task } from "src/app/backend.service";

@Component({
  selector: "app-tasks-list",
  templateUrl: "./tasks-list.component.html",
  styleUrls: ["./tasks-list.component.css"],
})
export class TasksListComponent implements OnInit {
  tasksList
  constructor(
    private router: Router,
    private backEnd: BackendService
    ) {}

  ngOnInit(): void {
    this.backEnd.tasks().subscribe( data => this.tasksList = data)
  }

  /**
   * method for redirect to full task info
   */
  openTask(id: Event) {
    this.router.navigateByUrl(`/task/${id}`);
  }

  /**
   * method to add new task
   */
  addTask(formData: any) {
    this.backEnd.newTask({description:formData.taskText})
  }
}
