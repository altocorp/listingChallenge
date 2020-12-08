import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  itemsList = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.itemsList = this.apiService.getData()
    console.log(this.itemsList)
  }

  

}
