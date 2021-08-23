import { Component, Input, OnChanges, Output} from "@angular/core";

import { EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
@Input() rating: number = 0;
cropWidth: number = 75;
@Output() ratingClick: EventEmitter<string>=
    new EventEmitter<string>();

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75 / 5;
  }
  onClick():void {
      this.ratingClick.emit(`the rating ${this.rating}was clicked`)
  }
}