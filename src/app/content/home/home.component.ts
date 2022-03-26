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
  userSorted:any[] =[]
  userContainer:any[] =[]
  yourObj:any[] =[]
  constructor(private _ApiService:ApiService) { }
  showUsersData(){
    this._ApiService.getUsersData().subscribe(
      (response) => {
        // this.users = response;
        this.users = _.sortBy(response,
          (item) => {
          return +(item.code.replace(',', ''));
        })
            let table = [];
            this.users.forEach(
              ele =>
              table[ele.code.split('.').pop()] = ele

            );
            this.yourObj = this.users.map(ele => {
              let splitCode = ele.code.split('.');
              ele.parent = splitCode[splitCode.length - 2];
              // this.userContainer = ele
              this.userContainer.push(ele)
              this.userSorted = _.sortBy(this.userContainer,
                (item) => {
                return +(item.code.replace('.', ''));
              })
              console.log(this.userSorted);
              // console.log(
              //   this.userContainer
              //   );
            })
      }
    )

  }

  ngOnInit(): void {
    this.showUsersData();
  }

}
