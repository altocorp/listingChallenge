import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { filter } from 'rxjs/operators';
import { from } from 'rxjs';



@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  itemsList = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getApiData()
  }

  // isSenior(vals){
  //   return vals 
  // }

  getApiData(){
    this.apiService.getData().subscribe(
      (res) => {
      this.itemsList = res
      let y = res[1].logo
      console.log(y)
    },
    (err) => {
      console.log(err)
    })

  }

  



  

}
