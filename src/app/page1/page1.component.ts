import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { filter } from 'rxjs/operators';
import { from, pipe } from 'rxjs';
import { MsgService } from '../services/msg.service';

import { faTimes } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})

export class Page1Component implements OnInit {

  @Input()

  itemsList = []
  itemsList2 = []

  filterVar
  filterList = []

  crossIcon = faTimes

  reset = true

  constructor(private apiService: ApiService, private msgServive: MsgService) { }

  ngOnInit(): void {
    this.getApiData()
  }

  getApiData(){
    this.apiService.getData().subscribe(
    (res) => {
      this.itemsList = res
      this.itemsList2 = this.itemsList
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

       if(this.filterList.includes(this.filterVar) == false)
      {this.filterList.push(this.filterVar)}

       this.itemsList = this.itemsList.filter( res => res.role == this.filterVar || res.level == this.filterVar || res.tools.indexOf(this.filterVar) > -1 || res.languages.indexOf(this.filterVar) > -1)
       
       this.handleReset2()

      }
    )
  }

  handleReset() {
    this.msgServive.sendMsg(this.reset)
  }

  handleReset2() {
    this.msgServive.getMsg().subscribe(
      res => {
        if(res == true){
          this.itemsList = this.itemsList2 
          this.filterList = []
        }
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


  


