import { Component, OnInit, Input } from '@angular/core';
import { MsgService } from 'src/app/services/msg.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  @Input()

  languages

  constructor(private msgService : MsgService) { }

  ngOnInit(): void {
  }

  languagesClicked(){
    this.msgService.sendMsg(this.languages)
  }

}
