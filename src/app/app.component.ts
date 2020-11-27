import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Shecluded';
  
  constructor(public data: DataService) {}

  ngOnInit() {
    this.data.router.navigateByUrl('/dashboard/myloans')
  }
}
