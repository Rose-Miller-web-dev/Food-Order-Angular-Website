import { Repair } from './../Repair';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RepairService } from '../services/repair.service';
import { RepairComponent } from '../repair/repair.component';
import { UiService } from '../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit{
    @Output() on_add_member: EventEmitter<Repair> = new EventEmitter()
    name_ts!: string;
    website_ts!: string;
    is_online_ts!: boolean;
    new_id:number = 0
    show_add_button:boolean = false
    subscription!: Subscription
    constructor(private repair_service_child:RepairService, private repair_ts_child:RepairComponent, ui_service_child:UiService){}

    submit_form(){
      if(!this.name_ts){
        alert('enter the name please!')
      }
      
      this.new_id = this.repair_ts_child.users.length 
      console.log('id',this.new_id)
      const new_member:Repair = {
        username: this.name_ts,
        website_address: this.website_ts,
        online: this.is_online_ts,
        id : this.new_id + 1
      }

      this.on_add_member.emit(new_member)
      this.repair_service_child.add_repairs(new_member).subscribe((new_member) => this.repair_ts_child.users.push(new_member))
      this.new_id = this.new_id + 1

      this.name_ts = ''
      this.website_ts = ''
      this.is_online_ts = false
    }

    add_close(){
      console.log("hello!!")
    }
    
    ngOnInit():void{
    }
}
