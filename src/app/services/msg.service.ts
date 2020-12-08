import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MsgService {

  subject = new Subject()

  constructor() { }

  sendMsg(item) {
    console.log(item)
    this.subject.next(item)
  }

  getMsg() {
    return this.subject.asObservable()
  }

}

