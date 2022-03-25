import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  incrementSeconds:string ="s"
  sortedUsers : any[] =[]
  users:any[] =[]
  constructor(private _ApiService:ApiService) { }
  showUsersData(){
    this._ApiService.getUsersData().subscribe(
      (response) => {
        this.users = response;

        this.sortedUsers = _.sortBy(this.users,
          (item) => {
              return +(item.code.replace(',', ''));
          })
          // slicing parent
            console.log(this.sortedUsers[2].code);
            console.log(this.sortedUsers[2].code.slice(-9,-5));

      }
    )

  }

  ngOnInit(): void {
    this.showUsersData()
  }

}
