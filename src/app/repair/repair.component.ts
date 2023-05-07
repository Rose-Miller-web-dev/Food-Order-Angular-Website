import { Repair } from './../Repair';
import { Component, Output } from '@angular/core';
import { repair_mock_list } from '../repair_mock';
import { RepairService } from '../services/repair.service';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})

export class RepairComponent implements OnInit{
    users:Repair[] = []
    @Output() delete_item: EventEmitter<Repair> = new EventEmitter()
    constructor(private repair_service_child:RepairService){}
    on_delete(user:Repair){
        this.delete_item.emit(user)
        console.log(this.repair_service_child.delete_repairs(user))
        this.repair_service_child.delete_repairs(user).subscribe(() => this.users = this.users.filter(r => r.id != user.id))
      }

    on_add_item(user:Repair){
      this.repair_service_child.add_repairs(user).subscribe((user) => this.users.push(user))
    }

    ngOnInit():void{
      this.repair_service_child.get_repairs().subscribe((list) => this.users = list)
    }
}
