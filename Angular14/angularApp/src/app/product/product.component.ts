import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  // @Input() pro:any;
  // ProductID!:String;
  // ProductName!:string;

  ngOnInit(): void {
    // this.ProductID = this.pro.EmployeeID;
    // this.ProductName = this.pro.ProductName;
  }

}
