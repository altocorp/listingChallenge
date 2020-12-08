import { Component, OnInit, Input } from '@angular/core';
import { MsgService } from 'src/app/services/msg.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  @Input()

  tools

  constructor(private msgService : MsgService) { }

  ngOnInit(): void {
  }

  toolsClicked(){
    this.msgService.sendMsg(this.tools)
  }

}
