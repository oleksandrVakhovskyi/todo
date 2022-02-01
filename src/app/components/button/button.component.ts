import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() action: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
    
  }

  submit(){
    this.action.next()
  }

}
