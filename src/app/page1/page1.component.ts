import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MsgService } from '../services/msg.service';

import { MsgRemoveService } from '../services/msg-remove.service';



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
  filterVarToRemove

  reset = true
  displayFilterInput = false


  constructor(private apiService: ApiService, private msgServive: MsgService, private msgRemoveService: MsgRemoveService) { }

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

        this.filterList.forEach(element => {
          this.itemsList = this.itemsList.filter( res => res.role == element || res.level == element || res.tools.indexOf(element) > -1 || res.languages.indexOf(element) > -1)
        });
        
       this.handleRemoveFilter()
       this.filterInput() 

      }
    )
  }

  handleRemoveFilter() {
    this.msgRemoveService.getMsg().subscribe(
      res => {
        this.itemsList = this.itemsList2 

        this.filterVarToRemove = res

        this.filterList = this.filterList.filter(res => res != this.filterVarToRemove)

        this.filterList.forEach(element => {
          this.itemsList = this.itemsList.filter( res => res.role == element || res.level == element || res.tools.indexOf(element) > -1 || res.languages.indexOf(element) > -1)
        });
      
      }
    )
  }

  filterInput(){
    if(this.filterList.length != 0){
      this.displayFilterInput = true
    } else {
      this.displayFilterInput = false
    }
  }
}


   // handleReset() {
  //   this.msgServive.getMsg().subscribe(
  //     res => {
  //       if(res == true){
  //         this.itemsList = this.itemsList2 
  //         this.filterList = []
  //       }
  //      }
  //   )
  // }


