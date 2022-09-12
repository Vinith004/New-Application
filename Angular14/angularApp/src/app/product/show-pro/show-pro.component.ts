import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-pro',
  templateUrl: './show-pro.component.html',
  styleUrls: ['./show-pro.component.scss']
})
export class ShowProComponent implements OnInit {

  constructor(private service:SharedService ) { }

  ProductList:any=[];
  ActivateAddEditProComp:boolean = false;
  pro:any;
  HeaderModel:any;

  ngOnInit(): void {
    this.refreshProList();
  }
  
  addClick(){
    this.pro = {
      id:0,
      name:"",
      description:"",
      rate:0
    }
    this.ActivateAddEditProComp = true;
    this.HeaderModel = "Add Product"
  }
  closeClick(){
    this.ActivateAddEditProComp = false;
    this.refreshProList();
  }
  EditClick(item:any){
    this.pro = item;
    this.ActivateAddEditProComp = true; 
    this.HeaderModel = "Update Product"
  }

  DeleteClick(item:any){
    if(confirm('Are you sure?')){
      this.service.DeleteProduct(item.id).subscribe(data =>{
        if(data == 1){
          alert("Deleted successfully");
        }
       
        this.refreshProList();
      })
    }
  }

  refreshProList(){
    this.service.GetProList().subscribe(data => {
      console.log('ProductList',data);
      this.ProductList = data;
    })
  }
}
