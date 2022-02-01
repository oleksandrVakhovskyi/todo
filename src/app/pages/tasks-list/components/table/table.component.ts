import { Component, Input, EventEmitter, OnInit, Output, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { BackendService, Task } from "src/app/backend.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class TableComponent implements OnInit , OnDestroy {
  @Input() tasksList: Task[];
  @Output() openTask: EventEmitter<number> = new EventEmitter();
  tasksSub: Subscription;
  displayedColumns: string[] = ["id", "description", "assigneeId", "completed"];

  constructor(private backend: BackendService) {}

  ngOnInit(): void {}

  open(id: number) {
    this.openTask.next(id);
  }
  ngOnDestroy(){
    this.tasksSub.unsubscribe()
  }
}
