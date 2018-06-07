import { Component, OnInit, Input } from '@angular/core';
import { CribCardInterface } from '../crib-card-interface';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {

  @Input('cribCardData')
  crib: CribCardInterface;
  

  constructor() { }

  ngOnInit() {
    
  }

}
