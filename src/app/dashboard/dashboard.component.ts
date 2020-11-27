import { Component, OnInit, HostListener, ViewChild, AfterViewInit, ChangeDetectorRef  } from '@angular/core';
import { DataService } from '../data.service';
import { NavigationEnd } from '@angular/router';
// import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public data: DataService) { }

  public innerWidth: any;
  private _opened: boolean = false;
  
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.data.router.navigateByUrl('/dashboard/home');
    this.routeEvent();
    // this.data.getLocation();

  }
 
  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  // on wondow resize 
  @HostListener('window:resize', ['$event'])
  onResize(event) {
  this.innerWidth = window.innerWidth;
  if(this.innerWidth < 768) {
    this._opened = false;
  }

  console.log(this.innerWidth)
  }

  w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

  currentRoute: string = "/dashboard";
  routeEvent() {
    this.data.router.events.subscribe( data => {
      // this.currentRoute = data instanceof NavigationEnd;
      if(data instanceof NavigationEnd) {
        this.currentRoute = data.url;
      }

      // console.log(data);
      console.log(this.currentRoute);
    })
  }

  date = new Date();
  logout() {
    this.data.router.navigateByUrl("/login")
  }
}
