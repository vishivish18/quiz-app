import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/authservice.service';

@Component({
  selector: 'app-manage-quiz',
  templateUrl: './manage-quiz.component.html',
  styleUrls: ['./manage-quiz.component.css']
})
export class ManageQuizComponent implements OnInit {

  ngOnInit() {
  }
  constructor(private auth: AuthService) {

  }

  logoutmethod() {
  this.auth.logout();
  }
}

