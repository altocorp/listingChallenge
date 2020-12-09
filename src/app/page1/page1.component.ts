import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { filter } from 'rxjs/operators';
import { from, pipe } from 'rxjs';
import { MsgService } from '../services/msg.service';



@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  itemsList = []

  filterVar

  constructor(private apiService: ApiService, private msgServive: MsgService) { }

  ngOnInit(): void {
    this.getApiData()
  }


  getApiData(){
    this.apiService.getData().subscribe(
    (res) => {
      this.itemsList = res
      this.handleMsg()
    },
    (err) => {
      console.log(err)
    }, 
    () => console.log('HTTP request completed.'))
  }

  handleMsg(){
    this.msgServive.getMsg().subscribe(
      res => {
       this.filterVar = res
        if(this.filterVar == "React"){
          this.itemsList = this.itemsList.filter( res => res.tools.indexOf("React") > -1)
        }
        console.log(this.filterVar)
      }
    )
  }

  }




  // getApiData(){
  //   this.apiService.getData().subscribe(
  //   (res) => {
  //     this.itemsList = res
  //     this.handleMsg()
  //   },
  //   (err) => {
  //     console.log(err)
  //   }, 
  //   () => console.log('HTTP request completed.'))
  // }

  // handleMsg(){
  //   this.msgServive.getMsg().subscribe(
  //     res => {
  //      this.filterVar = res
  //       if(this.filterVar == "React"){
  //         this.itemsList = this.itemsList.filter( res => res.tools.indexOf("React") > -1)
  //       }
  //       console.log(this.filterVar)
  //     }
  //   )
  // }


  


