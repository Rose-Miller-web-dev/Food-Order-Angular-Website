import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AddItemComponent } from '../add-item/add-item.component';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private show_add_button:boolean = false
  private subject = new Subject<any>()
  constructor() { }

  add_member_toggler(): void{
    this.show_add_button = !this.show_add_button
    this.subject.next(this.show_add_button)
  }

  on_toggle(): Observable<any>{
    return this.subject.asObservable()
  }

}
