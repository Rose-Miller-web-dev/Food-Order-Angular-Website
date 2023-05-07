import { Component, OnInit } from '@angular/core';
import { MealsService } from '../services/meals.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  ngOnInit(): void {
    this.get_recipe()
  }

  randomMealList :any[] = []

  public postJasonVal: any
  public getJasonVal: any
  constructor(private service_child: MealsService, private http: HttpClient) {}

  get_recipe() {
    // this.service_child.get_recipes().subscribe((res) => {
    //   this.randomMealList.push(res)
    // })

    // console.log(this.randomMealList, '#list')
  }
}
