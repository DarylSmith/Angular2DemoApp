import { ListingsService } from './listings.service';
import { MeetupEvent } from "../shared/meetup-event";
import { MeetupSpeaker } from "../shared/meetup-speaker";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";


@Component({

  selector:'app-event-editor',
  templateUrl:'./event-editor.component.html'

})
export class EventEditorComponent implements OnInit{

@Input() public EventID = 0;

@Output()  ItemUpdate: EventEmitter<string>= new EventEmitter<string>();;

public NewEvent: MeetupEvent = new MeetupEvent();

public Speakers: MeetupSpeaker[] = [];

  public get CurrentEvent(): MeetupEvent {
    return this.EventID !== 0 ?
      this._listingsService.events.find(listings => listings.Id === this.EventID) : this.NewEvent
  }



constructor(public _listingsService: ListingsService) { }


ngOnInit(){
  this.getSpeakers();
}

public getSpeakers():void{

  this._listingsService.getSpeakers().subscribe(speakers=>{
    this.Speakers = speakers;
  })


}



  public modifyEvent() {
    if (this.CurrentEvent.Id === 0) {
      this._listingsService.insertEventListing(this.CurrentEvent).subscribe(e => {
        this.ItemUpdate.emit('New Item Added!');
        this.NewEvent = new MeetupEvent();
        this.EventID = 0;
      });
    }
    else {
      this._listingsService.updateEventListing(this.CurrentEvent).subscribe(e => {
          this.ItemUpdate.emit(`${this.CurrentEvent.EventName} updated! `);
          this.EventID = 0;
      });

    }

  }





}

