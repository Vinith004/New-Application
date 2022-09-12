import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiURL = "https://localhost:7250/api"

  constructor(private http:HttpClient) { }

  GetProList():Observable<any[]>{
    return this.http.get<any>(this.ApiURL + "/Product");
  }

  addProduct(val:any){
    return this.http.post(this.ApiURL + "/Product",val)
  }
  UpdateProduct(val:any){
    return this.http.put(this.ApiURL + "/Product",val)
  }
  DeleteProduct(val:any){
    return this.http.delete(this.ApiURL + "/Product/"+val)
  }

  Login(val:any){
    return this.http.post(this.ApiURL + "/Login",val)
  }
}
