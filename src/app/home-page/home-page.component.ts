import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private userService: UserServiceClient) { }

  users;
  selSkill = '';
  firstFlag = true;

  ngOnInit() {
    this.userService.findUser()
      .then(users => {this.users = users;
                    // console.log(this.users);
      });
  }

  skill(selSkill){
    this.firstFlag = false;
    this.selSkill = selSkill;
  }
}
