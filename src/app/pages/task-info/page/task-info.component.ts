import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";

import { BackendService } from "src/app/backend.service";
import { Task } from "src/app/backend.service";

@Component({
  selector: "app-task-info",
  templateUrl: "./task-info.component.html",
  styleUrls: ["./task-info.component.css"],
})
export class TaskInfoComponent implements OnInit {
  task: Task;
  constructor(
    private activateRout: ActivatedRoute,
    private backEnd: BackendService
  ) {}

  ngOnInit(): void {
    this.activateRout.params
      .pipe(switchMap((data) => this.backEnd.task(data.id)))
      .subscribe((data) => {
        this.task = data;
        console.log(this.task);
      });
  }
}
