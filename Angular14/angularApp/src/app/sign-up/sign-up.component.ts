import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  @Input()
  email:any;
  password:any;
  address1:any;
  address2:any;
  city:any;
  state:any;
  zip:any;

  ngOnInit(): void {
    
  }

}
