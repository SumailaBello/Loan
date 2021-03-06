import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Loan';
  
  constructor(public data: DataService) {}

  ngOnInit() {
    this.data.router.navigateByUrl('/login')
  }
}
