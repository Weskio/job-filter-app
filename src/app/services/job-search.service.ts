import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobSearchService {

  public myTags :any =[]

  clearTags(){
    this.myTags = []
  }

  constructor() { }
}
