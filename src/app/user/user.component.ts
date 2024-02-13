import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  users!: any[];
  constructor(private userService: UserServiceService){

  }
  ngOnInit(): void {
this.userService.getUsers().subscribe(response => {
  this.users = response;
});
  }

}
