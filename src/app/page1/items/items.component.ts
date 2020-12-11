import { Component, OnInit, Input } from '@angular/core';
import { MsgService } from 'src/app/services/msg.service';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input()

  item

  newTrue
  featuredTrue
  


  constructor(private msgService : MsgService) { }

  ngOnInit(): void {
    this.displayNewFeatured() 
  }

  displayNewFeatured(){
    this.newTrue = this.item.new
    this.featuredTrue = this.item.featured
  }

  roleClicked(){
    this.msgService.sendMsg(this.item.role)
  }

  levelClicked(){
    this.msgService.sendMsg(this.item.level)
  }

  
}
