import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-legume',
  templateUrl: './legume.component.html',
  styleUrls: ['./legume.component.css']
})
export class LegumeComponent implements OnInit {
  @Input() image:string;
  @Input() nom:string;
  @Input() prix:number;
  @Input() frais:boolean;

  constructor() { }

  prix1:number;
  calculer (value)
  {
    this.prix1=this.prix*value;
  }

  ngOnInit() {
  }

}
