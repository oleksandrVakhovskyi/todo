import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should trigger action event on button click', () => {
    const actionEvent = spyOn(component.action, 'next');
    const button = fixture.debugElement.query(By.css('button'));
    const buttonElement = button.nativeElement as HTMLButtonElement;

    buttonElement.click();
    fixture.detectChanges();

    expect(actionEvent).toHaveBeenCalled();
  });

  it('submit() should raise nothing', () => {
    component.action.subscribe((credentials) => {
      expect(credentials).toBe(undefined)
    })
    component.submit()
  })
});
