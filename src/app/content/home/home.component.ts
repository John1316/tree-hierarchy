import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {TreeNode} from 'primeng/api';

import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  incrementSeconds:string ="s"
  counter= 0;
  sortedUsers : any[] =[]
  users:any[] =[]
  userSorted:any[] =[]
  userContainer:any[] =[]
  constructor(private _ApiService:ApiService) { }
  showUsersData(){
    this._ApiService.getUsersData().subscribe(
      (response) => {
        this.users = response

            this.users.map(ele => {
              let splitCode = ele.code.split('.');
              ele.parent = splitCode[splitCode.length - 2];
              ele.level = splitCode.length;
              
              this.userContainer.push(ele)
              this.userSorted = _.sortBy(this.userContainer,
                (item) => {

                return item.code.replace('.', '');
              })

              console.log(this.userSorted);
            })
      }
    )

  }

  ngOnInit(): void {
    this.showUsersData();

  }

}
