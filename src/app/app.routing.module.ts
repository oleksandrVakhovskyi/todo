import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/tasks-list/tasks-list.module").then(
        (m) => m.TasksListModule
      ),
  },

  {
    path: "task",
    loadChildren: () =>
      import("./pages/task-info/task-info.module").then(
        (m) => m.TaskInfoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
