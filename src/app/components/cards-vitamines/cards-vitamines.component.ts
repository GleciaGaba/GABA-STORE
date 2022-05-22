import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-vitamines',
  templateUrl: './cards-vitamines.component.html',
  styleUrls: ['./cards-vitamines.component.css']
})
export class CardsVitaminesComponent implements OnInit {
 @Input() public vitamine: any;
  constructor() { }

  ngOnInit(): void {
  }

}
