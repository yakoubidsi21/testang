import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-legume',
  templateUrl: './liste-legume.component.html',
  styleUrls: ['./liste-legume.component.css']
})
export class ListeLegumeComponent implements OnInit {

  tabLegumes = [
    {image : '../assets/tomate.jpg', nom:'tomate' , prix:2.8 , frais:false},
     {image : '../assets/radis.jpg', nom:'radis' , prix:1.8 , frais:true},
      {image : '../assets/carotte.jpg', nom:'carotte' , prix:3.8 , frais:false}
    
     ];

     date1="12/11/2019";

  constructor() { }

  ngOnInit() {
  }

}
