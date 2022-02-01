import { Component, EventEmitter, OnInit, Output } from "@angular/core";
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
 @Output() submit: EventEmitter<any> = new EventEmitter()
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formInit();
  }

  addTask() {
    this.submit.next(this.form.value);
  }

  private formInit() {
    return (this.form = this.formBuilder.group({
      assigneeId: new FormControl("", [Validators.pattern("[0-9]")]),
      taskText: new FormControl(""),
    }));
  }
}
