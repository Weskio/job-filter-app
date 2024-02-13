import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobSearchService {
  private _myTags: string[] = [];
  public myTags$ = new BehaviorSubject<string[]>(this._myTags);

  get myTags(): string[] {
    return this._myTags;
  }

  set myTags(value: string[]) {
    this._myTags = value;
    this.myTags$.next(this._myTags);
  }

  constructor() {}
}
