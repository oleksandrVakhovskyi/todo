import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formInit();
  }

  addTask() {
    console.log(this.form.value, this.form.valid);
  }

  private formInit() {
    return (this.form = this.formBuilder.group({
      assigneeId: new FormControl("", [Validators.pattern("[0-9]")]),
      taskText: new FormControl(""),
    }));
  }
}
