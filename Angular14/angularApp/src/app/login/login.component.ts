import { Component, OnInit,Input } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = "Login";
  registerForm:any = FormGroup;
  submitted = false;

  constructor(
    private formbuilder:FormBuilder,
    private service:SharedService,
    private router:Router
    ) { }

  @Input() log:any;
  email:any;
password:any;

  get f(){return this.registerForm.controls}

  onsubmit(){
    this.submitted = true;

    if(this.registerForm.invalid){
      return;
    }

    if(this.submitted){
      this.LoginCheck()
    }
  }
  ngOnInit(): void {
    this.log ={email:'',password:''}

    this.email = this.log.email;
    this.password = this.log.password;

    this.registerForm = this.formbuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }
  LoginCheck(){
    var val = {email:this.email,password:this.password};
    this.service.Login(val).subscribe(res => {
      if(res != 1){
        alert("Invalid credential");
      }else{
        this.router.navigate(['/product'])
      }
    })
  }

}
