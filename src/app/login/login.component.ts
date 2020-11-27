import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public data: DataService) { }

  segment: string = "login";
  ngOnInit() {
  }

  switchSegment(segment) {
    this.segment = segment;
    console.log(this.segment);
  }

  login() {
    this.data.router.navigateByUrl("/dashboard");
  }

}
