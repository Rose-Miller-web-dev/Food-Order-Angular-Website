import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(private http: HttpClient) { 

  }

  //api_url = 'http://localhost:3000/meals'
  api_url = 'www.themealdb.com/api/json/v1/1/search.php?f=a'

  get_recipes():Observable<any> {
    return this.http.get(this.api_url)
  }
}
