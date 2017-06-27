import { Component, OnInit } from '@angular/core';
import { ListingsService } from "./listings.service";

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  public resultText: string;

  public CurrentEventID = 0;

  constructor(public _listingsService: ListingsService) { }

  public displayResultText($event: string){
    this.resultText = $event;
  }

  ngOnInit() {
  }

  public SetEventID(id:number):void{
    this.CurrentEventID = id;
  }



}
