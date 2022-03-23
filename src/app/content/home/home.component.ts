import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users:any[] =[]
  constructor(private _ApiService:ApiService) { }
  showUsersData(){
    this._ApiService.getUsersData().subscribe(
      (response) => {
        this.users = response
        // console.log(response);
      }
    )
  }
  ngOnInit(): void {
    this.showUsersData()
  }

}
