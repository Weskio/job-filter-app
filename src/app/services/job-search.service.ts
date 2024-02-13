import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobSearchService {

  public myTags :string[] =[]

  clearTags(){
    this.myTags = []
  }

  constructor() { }
}
