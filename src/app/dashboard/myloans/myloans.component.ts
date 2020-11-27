import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import Calendar from "calendar-lite";

@Component({
  selector: 'app-myloans',
  templateUrl: './myloans.component.html',
  styleUrls: ['./myloans.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyloansComponent implements OnInit {

  constructor() { }
  @ViewChild("calendar", {static: false}) calendar: ElementRef;

  ngOnInit() {
    // this.renderCalendar();
  }

  ngAfterViewInit() {
  }

  ngAfterViewChecked() {
    // this.renderCalendar();
  }

  renderCalendar() {
    return new Calendar({
      el: this.calendar.nativeElement,
      currentDate: new Date(),
      onDayClick: this.onDayClick,
      onClickPreMonth: ()=> console.log(new Date),
    });
  }

  onDayClick(date) {
    console.log(date); // choose date
  }

}
