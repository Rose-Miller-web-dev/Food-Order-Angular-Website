import { Injectable } from '@angular/core';
import { Repair } from './../Repair';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RepairService {

  constructor(private http:HttpClient) { }
  private api_url = 'http://localhost:3000/user_db_list'
  get_repairs(): Observable<Repair[]>{
      return this.http.get<Repair[]>(this.api_url)  
    }

  delete_repairs(user: Repair):Observable<Repair>{
      const delete_url = `${this.api_url}/${user.id}`
      return this.http.delete<Repair>(delete_url)
  }

  add_repairs(item:Repair):Observable<Repair>{
    return this.http.post<Repair>(this.api_url, item)
  }
}
