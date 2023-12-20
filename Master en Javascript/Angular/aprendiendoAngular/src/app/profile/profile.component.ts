import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user!: User;

  constructor() {
    
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('session') || '{}');

    
    console.log(this.user);
  }



}
