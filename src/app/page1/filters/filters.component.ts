import { Component, OnInit, Input } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MsgRemoveService } from 'src/app/services/msg-remove.service';
import { MsgService } from 'src/app/services/msg.service';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input()

  filter

  crossIcon = faTimes


  constructor(private msgRemoveService: MsgRemoveService) { }

  ngOnInit(): void {
  }

  testRmBtn(){
   this.msgRemoveService.sendMsg(this.filter)
  }

}
