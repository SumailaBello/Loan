import { Component, OnInit, HostListener, ViewChild, AfterViewInit, ChangeDetectorRef  } from '@angular/core';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  constructor() { }

  headElements = [ "Date", "Transaction", "Type", "Status", "Amount" ];
  elements = [ 
    {
      id: "One", 
      first: "John", 
      last: "Doe",
      handle: "Social",
      amount: 5000
    },
    {
      id: "Two", 
      first: "John", 
      last: "Doe",
      handle: "Social",
      amount: 5000 
    }
  ]
  ngOnInit() {
  }

}
