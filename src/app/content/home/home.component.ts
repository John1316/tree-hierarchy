import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('flyInOut', [
      state('in', style({
        width: '*',
        transform: 'translateX(0)', opacity: 1
      })),
      transition(':enter', [
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: '*'
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition(':leave', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  incrementSeconds:string ="s"
  users:any[] =[]
  constructor(private _ApiService:ApiService) { }
  showUsersData(){
    this._ApiService.getUsersData().subscribe(
      (response) => {
        this.users = response
        console.log(response[1].code);

      }
    )
  }

  ngOnInit(): void {
    this.showUsersData()
  }

}
