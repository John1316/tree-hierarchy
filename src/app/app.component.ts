import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tree-hierarchy';
  constructor(private _NgwWowService:NgwWowService) {}
  ngOnInit(): void {
    this._NgwWowService.init()
  }
}
