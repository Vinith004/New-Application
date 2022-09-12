import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-pro',
  templateUrl: './add-edit-pro.component.html',
  styleUrls: ['./add-edit-pro.component.scss']
})
export class AddEditProComponent implements OnInit {

  constructor(private servive:SharedService) { }

  @Input() pro:any;
  id:any;
  name:any;
  description:any;
  rate:any;
  barcode:any;

  ngOnInit(): void {
    this.id = this.pro.id;
    this.name = this.pro.name;
    this.description =this.pro.description;
    this.rate = this.pro.rate;
    this.barcode = this.pro.barcode;
  }

    addProduct(){
      var val = {id:this.id,name:this.name,description:this.description,rate:this.rate,barcode:this.barcode,addedon:"",updatedon:''};
      this.servive.addProduct(val).subscribe(res => {
        if(res == 1){
          alert("Saved successfully");
        }
      })
    }
  UpdateProduct(){
    var val = {id:this.id,name:this.name,description:this.description,rate:this.rate,barcode:this.barcode,addedon:"",updatedon:''};
    this.servive.UpdateProduct(val).subscribe(res => {
      if(res == 1){
        alert("Updated successfully");
      }
    })
  }
}
