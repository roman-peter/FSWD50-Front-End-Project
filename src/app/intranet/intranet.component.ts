import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.component.html',
  styleUrls: ['./intranet.component.css']
})
export class IntranetComponent implements OnInit {

  constructor(public authService: UsersService) {}

  ngOnInit() {
  }

}
