import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable'
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { MeetupEvent } from '../shared/meetup-event';
import { MeetupSpeaker } from "../shared/meetup-speaker";

@Injectable()
export class ListingsService{

private listingsEndpoint: string = environment.apiHost + '/api/events';
private speakersEndpoint: string = environment.apiHost + '/api/speakers';

 public events: MeetupEvent[];

 constructor(private _http: Http){

   this.getEventListings();
 }

   public getEventListings(): void {
    {
      this._http.get(this.listingsEndpoint)
        .map((response: Response) => <MeetupEvent[]>response.json()).subscribe(result => {
          this.events = result;
          console.log(result);
        });
    }
  }

      public insertEventListing(event:MeetupEvent): Observable<any> {
    {

      let body = JSON.stringify(event);
      return this._http.post(this.listingsEndpoint, body, this.getStandardHttpHeaders())
        .map((response: Response) =>
        {
            this.getEventListings();
        });
    }
  }

    public updateEventListing(event:MeetupEvent): Observable<any> {
    {
      let body = JSON.stringify(event);
      return this._http.put(this.listingsEndpoint,body, this.getStandardHttpHeaders())
        .map((response: Response) =>
        {
            this.getEventListings();
        });
    }

  }

    public getSpeakers(): Observable<MeetupSpeaker[]> {
    {
      return this._http.get(this.speakersEndpoint)
        .map((response: Response) => <MeetupSpeaker[]>response.json())
    }

  }

      // add the standard headers for an api request
    getStandardHttpHeaders(): any {
        let headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json'});
        let options = { headers: headers };
        return options;
    }






}
